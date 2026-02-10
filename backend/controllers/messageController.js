const Message = require("../models/Message");
const asyncHandler = require("../utils/asyncHandler");
const { notifyNewLead } = require("../utils/notifications");

const listMessages = asyncHandler(async (req, res) => {
  const { limit, before, trash } = req.query;
  const query = {};
  const showTrash = Boolean(trash);

  if (showTrash) {
    query.deletedAt = { $ne: null };
  } else {
    query.$or = [{ deletedAt: null }, { deletedAt: { $exists: false } }];
  }

  if (before) {
    query.createdAt = { $lt: new Date(before) };
  }

  const messages = await Message.find(query)
    .sort({ createdAt: -1 })
    .limit(limit);

  res.json({
    items: messages,
    nextCursor:
      messages.length > 0 ? messages[messages.length - 1].createdAt : null,
  });
});

const addMessage = asyncHandler(async (req, res) => {
  const { text, name, email, phone, company, message } = req.body;

  const payload = {
    text: text || undefined,
    name: name || undefined,
    email: email || undefined,
    phone: phone || undefined,
    company: company || undefined,
    message: message || undefined,
  };

  if (req.user) {
    payload.user = req.user.id;
    payload.username = req.user.username;
  }

  const saved = await Message.create(payload);

  setImmediate(() => {
    notifyNewLead(saved.toObject()).catch((error) => {
      console.error("Falha ao enviar notificacoes:", error);
    });
  });

  res.status(201).json(saved);
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const message = await Message.findOneAndUpdate(
    { _id: id, $or: [{ deletedAt: null }, { deletedAt: { $exists: false } }] },
    { $set: { deletedAt: new Date() } },
    { new: true }
  );

  if (!message) {
    return res.status(404).json({ message: "Mensagem nao encontrada." });
  }

  res.json({ message: "Mensagem movida para lixeira." });
});

const purgeMessage = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await Message.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ message: "Mensagem nao encontrada." });
  }

  res.json({ message: "Mensagem apagada." });
});

module.exports = {
  listMessages,
  addMessage,
  deleteMessage,
  purgeMessage,
};
