const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ms = require("ms");
const { env } = require("../config/env");
const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");
const asyncHandler = require("../utils/asyncHandler");
const {
  hashToken,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwt");

function buildRefreshCookieOptions() {
  const rawSameSite = env.cookieSameSite.toLowerCase();
  const sameSite = ["lax", "strict", "none"].includes(rawSameSite)
    ? rawSameSite
    : "lax";
  const secure = env.nodeEnv === "production" || sameSite === "none";

  const options = {
    httpOnly: true,
    secure,
    sameSite,
    path: "/api/auth",
    maxAge: ms(env.refreshTokenTtl),
  };

  if (env.cookieDomain) {
    options.domain = env.cookieDomain;
  }

  return options;
}

function clearRefreshCookie(res) {
  const options = buildRefreshCookieOptions();
  delete options.maxAge;
  res.clearCookie(env.cookieName, options);
}

async function issueTokens(user, res) {
  const accessToken = signAccessToken(user);
  const { token: refreshToken } = signRefreshToken(user);
  const tokenHash = hashToken(refreshToken);
  const decoded = jwt.decode(refreshToken);

  await RefreshToken.create({
    user: user._id,
    tokenHash,
    expiresAt: new Date(decoded.exp * 1000),
  });

  res.cookie(env.cookieName, refreshToken, buildRefreshCookieOptions());

  return { accessToken, refreshToken };
}

const register = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const existing = await User.findOne({ username });
  if (existing) {
    return res.status(409).json({ message: "Usuario ja existe." });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({ username, passwordHash });

  const tokens = await issueTokens(user, res);

  res.status(201).json({
    user: user.toJSON(),
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
  });
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Credenciais invalidas." });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Credenciais invalidas." });
  }

  const tokens = await issueTokens(user, res);

  res.json({
    user: user.toJSON(),
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
  });
});

const refresh = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies?.[env.cookieName] || req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token ausente." });
  }

  let payload;
  try {
    payload = verifyRefreshToken(refreshToken);
  } catch (error) {
    return res.status(401).json({ message: "Refresh token invalido." });
  }

  const tokenHash = hashToken(refreshToken);
  const storedToken = await RefreshToken.findOne({ tokenHash });

  if (!storedToken || storedToken.revokedAt) {
    return res.status(401).json({ message: "Refresh token revogado." });
  }

  if (storedToken.expiresAt < new Date()) {
    return res.status(401).json({ message: "Refresh token expirado." });
  }

  const user = await User.findById(payload.sub);
  if (!user) {
    return res.status(401).json({ message: "Usuario nao encontrado." });
  }

  const newTokens = await issueTokens(user, res);
  const newTokenHash = hashToken(newTokens.refreshToken);

  storedToken.revokedAt = new Date();
  storedToken.replacedByTokenHash = newTokenHash;
  await storedToken.save();

  res.json({
    user: user.toJSON(),
    accessToken: newTokens.accessToken,
    refreshToken: newTokens.refreshToken,
  });
});

const logout = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies?.[env.cookieName] || req.body.refreshToken;

  if (refreshToken) {
    const tokenHash = hashToken(refreshToken);
    await RefreshToken.updateOne(
      { tokenHash, revokedAt: null },
      { $set: { revokedAt: new Date() } }
    );
  }

  if (req.user?.id) {
    await RefreshToken.updateMany(
      { user: req.user.id, revokedAt: null },
      { $set: { revokedAt: new Date() } }
    );
  }

  clearRefreshCookie(res);
  res.json({ message: "Logout realizado." });
});

const me = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "Usuario nao encontrado." });
  }

  res.json({ user: user.toJSON() });
});

module.exports = {
  register,
  login,
  refresh,
  logout,
  me,
};
