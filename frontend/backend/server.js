require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'messages.json');

const loadMessages = () => {
  if (!fs.existsSync(dataFile)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(dataFile, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('[messages] failed to load:', error && error.message ? error.message : error);
    return [];
  }
};

const persistMessages = (list) => {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(dataFile, JSON.stringify(list, null, 2), 'utf8');
  } catch (error) {
    console.error('[messages] failed to persist:', error && error.message ? error.message : error);
  }
};

const messages = loadMessages();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
  if (!token) {
    res.status(401).json({ error: 'missing_token' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      res.status(401).json({ error: 'invalid_token' });
      return;
    }
    next();
  });
};

const buildTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });
};

const sendContactEmail = async (payload) => {
  const transporter = buildTransporter();
  if (!transporter) {
    return false;
  }

  const to = process.env.CONTACT_EMAIL || 'contato@etzahweb.com';
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  await transporter.sendMail({
    from,
    to,
    subject: `Novo lead: ${payload.nome || 'Sem nome'}`,
    text: `Nome: ${payload.nome || '-'}\nEmail: ${payload.email || '-'}\nEmpresa: ${payload.empresa || '-'}\nMensagem: ${payload.messaggio || '-'}`
  });

  return true;
};

const sendWhatsApp = async (payload) => {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const to = process.env.WHATSAPP_TO;

  if (!token || !phoneId || !to) {
    return false;
  }

  const body = {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: {
      body: `Novo lead:\nNome: ${payload.nome || '-'}\nEmail: ${payload.email || '-'}\nEmpresa: ${payload.empresa || '-'}\nMensagem: ${payload.messaggio || '-'}`
    }
  };

  const response = await fetch(`https://graph.facebook.com/v18.0/${phoneId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error('whatsapp_send_failed');
  }

  return true;
};

app.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    res.status(500).json({ error: 'admin_not_configured' });
    return;
  }

  if (email !== adminEmail || password !== adminPassword) {
    res.status(401).json({ error: 'invalid_credentials' });
    return;
  }

  const token = jwt.sign({ admin: true }, process.env.JWT_SECRET);
  res.json({ token });
});

app.post('/messaggi', async (req, res) => {
  const payload = req.body || {};
  console.log('[messaggi] received:', {
    nome: payload.nome || null,
    email: payload.email || null,
    empresa: payload.empresa || null,
    hasMessage: Boolean(payload.messaggio)
  });
  messages.push(payload);
  persistMessages(messages);

  const result = {
    emailSent: false,
    whatsappSent: false
  };

  try {
    result.emailSent = await sendContactEmail(payload);
  } catch (error) {
    console.error('[email] failed:', error && error.message ? error.message : error);
    result.emailSent = false;
  }

  try {
    result.whatsappSent = await sendWhatsApp(payload);
  } catch (error) {
    console.error('[whatsapp] failed:', error && error.message ? error.message : error);
    result.whatsappSent = false;
  }

  res.status(201).json(result);
});

app.get('/messaggi', requireAuth, (req, res) => {
  res.json(messages);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server avviato su ${port}`);
});
