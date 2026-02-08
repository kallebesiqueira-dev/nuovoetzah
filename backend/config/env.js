const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(process.cwd(), ".env") });

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  mongodbUri: process.env.MONGODB_URI || "",
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET || "",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || "",
  jwtIssuer: process.env.JWT_ISSUER || "etzahweb",
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL || "15m",
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || "30d",
  corsOrigins: (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  cookieName: process.env.REFRESH_COOKIE_NAME || "refreshToken",
  cookieDomain: process.env.COOKIE_DOMAIN || "",
  cookieSameSite: process.env.COOKIE_SAMESITE || "lax",
  emailHost: process.env.EMAIL_HOST || "smtp.gmail.com",
  emailPort: Number(process.env.EMAIL_PORT || 465),
  emailSecure: process.env.EMAIL_SECURE
    ? process.env.EMAIL_SECURE === "true"
    : true,
  emailUser: process.env.EMAIL_USER || "",
  emailPass: process.env.EMAIL_PASS || "",
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: process.env.EMAIL_TO || "",
  emailSubject: process.env.EMAIL_SUBJECT || "",
  emailAutoReplySubject: process.env.EMAIL_AUTOREPLY_SUBJECT || "",
  emailAutoReplyText: process.env.EMAIL_AUTOREPLY_TEXT || "",
  whatsappToken: process.env.WHATSAPP_TOKEN || "",
  whatsappPhoneId: process.env.WHATSAPP_PHONE_ID || "",
  whatsappAdminNumber: process.env.WHATSAPP_ADMIN_NUMBER || "",
  whatsappApiBase:
    process.env.WHATSAPP_API_BASE || "https://graph.facebook.com/v19.0",
  whatsappAutoReplyText: process.env.WHATSAPP_AUTOREPLY_TEXT || "",
};

function validateEnv() {
  const missing = [];

  if (!env.mongodbUri) missing.push("MONGODB_URI");
  if (!env.jwtAccessSecret) missing.push("JWT_ACCESS_SECRET");
  if (!env.jwtRefreshSecret) missing.push("JWT_REFRESH_SECRET");

  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(", ")}`);
  }
}

module.exports = { env, validateEnv };
