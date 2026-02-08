const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { env } = require("../config/env");

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function signAccessToken(user) {
  return jwt.sign(
    { sub: user.id, username: user.username },
    env.jwtAccessSecret,
    {
      issuer: env.jwtIssuer,
      expiresIn: env.accessTokenTtl,
    }
  );
}

function signRefreshToken(user) {
  const tokenId = crypto.randomUUID
    ? crypto.randomUUID()
    : crypto.randomBytes(16).toString("hex");

  const token = jwt.sign(
    { sub: user.id, jti: tokenId },
    env.jwtRefreshSecret,
    {
      issuer: env.jwtIssuer,
      expiresIn: env.refreshTokenTtl,
    }
  );

  return { token, tokenId };
}

function verifyAccessToken(token) {
  return jwt.verify(token, env.jwtAccessSecret, { issuer: env.jwtIssuer });
}

function verifyRefreshToken(token) {
  return jwt.verify(token, env.jwtRefreshSecret, { issuer: env.jwtIssuer });
}

module.exports = {
  hashToken,
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
