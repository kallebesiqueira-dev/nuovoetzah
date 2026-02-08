const axios = require("axios");
const nodemailer = require("nodemailer");
const { env } = require("../config/env");

const DEFAULT_EMAIL_SUBJECT = "Novo lead do site";
const DEFAULT_EMAIL_AUTOREPLY_SUBJECT = "Recebemos sua mensagem";
const DEFAULT_EMAIL_AUTOREPLY_TEXT =
  "Obrigado pelo contato. Recebemos sua mensagem e retornaremos em ate 24 horas.";
const DEFAULT_WHATSAPP_AUTOREPLY_TEXT =
  "Obrigado pelo contato! Recebemos sua mensagem e responderemos em breve.";

function buildLeadSummary(lead) {
  const parts = [
    `Nome: ${lead.name || "-"}`,
    `Email: ${lead.email || "-"}`,
    `Telefone: ${lead.phone || "-"}`,
    `Empresa: ${lead.company || "-"}`,
    `Mensagem: ${lead.message || lead.text || "-"}`,
  ];

  return parts.join("\n");
}

function getMailer() {
  if (!env.emailUser || !env.emailPass || !env.emailTo) {
    return null;
  }

  return nodemailer.createTransport({
    host: env.emailHost,
    port: env.emailPort,
    secure: env.emailSecure,
    auth: {
      user: env.emailUser,
      pass: env.emailPass,
    },
  });
}

async function sendOwnerEmail(lead) {
  const transporter = getMailer();
  if (!transporter) return;

  const subject = env.emailSubject || DEFAULT_EMAIL_SUBJECT;
  const summary = buildLeadSummary(lead);

  await transporter.sendMail({
    from: env.emailFrom || env.emailUser,
    to: env.emailTo,
    subject,
    text: summary,
    replyTo: lead.email || undefined,
  });
}

async function sendAutoReplyEmail(lead) {
  if (!lead.email) return;

  const transporter = getMailer();
  if (!transporter) return;

  const subject = env.emailAutoReplySubject || DEFAULT_EMAIL_AUTOREPLY_SUBJECT;
  const text = env.emailAutoReplyText || DEFAULT_EMAIL_AUTOREPLY_TEXT;

  await transporter.sendMail({
    from: env.emailFrom || env.emailUser,
    to: lead.email,
    subject,
    text,
  });
}

function normalizePhone(phone) {
  if (!phone) return "";
  return String(phone).replace(/[^0-9]/g, "");
}

async function sendWhatsAppText(to, body) {
  if (!env.whatsappToken || !env.whatsappPhoneId) return;

  const url = `${env.whatsappApiBase}/${env.whatsappPhoneId}/messages`;
  const payload = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: { body },
  };

  await axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${env.whatsappToken}`,
      "Content-Type": "application/json",
    },
  });
}

async function sendOwnerWhatsApp(lead) {
  if (!env.whatsappAdminNumber) return;

  const summary = buildLeadSummary(lead);
  const body = `Novo lead do site:\n${summary}`;
  const to = normalizePhone(env.whatsappAdminNumber);

  if (!to) return;
  await sendWhatsAppText(to, body);
}

async function sendAutoReplyWhatsApp(lead) {
  if (!lead.phone) return;
  const to = normalizePhone(lead.phone);
  if (!to) return;

  const body = env.whatsappAutoReplyText || DEFAULT_WHATSAPP_AUTOREPLY_TEXT;
  await sendWhatsAppText(to, body);
}

async function notifyNewLead(lead) {
  await Promise.allSettled([
    sendOwnerEmail(lead),
    sendAutoReplyEmail(lead),
    sendOwnerWhatsApp(lead),
    sendAutoReplyWhatsApp(lead),
  ]);
}

module.exports = {
  notifyNewLead,
};
