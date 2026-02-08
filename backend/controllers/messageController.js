const Message = require("../models/Message");
const asyncHandler = require("../utils/asyncHandler");

const listMessages = asyncHandler(async (req, res) => {
  const { limit, before } = req.query;
  const query = {};

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
  const { text, name, email, company, message } = req.body;

  const payload = {
    text: text || undefined,
    name: name || undefined,
    email: email || undefined,
    company: company || undefined,
    message: message || undefined,
  };

  if (req.user) {
    payload.user = req.user.id;
    payload.username = req.user.username;
  }

  const saved = await Message.create(payload);

  res.status(201).json(saved);
});

module.exports = {
  listMessages,
  addMessage,
};
