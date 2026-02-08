const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true,
  },
  username: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    maxlength: 80,
  },
  email: {
    type: String,
    trim: true,
    maxlength: 120,
  },
  company: {
    type: String,
    trim: true,
    maxlength: 120,
  },
  message: {
    type: String,
    trim: true,
    maxlength: 2000,
  },
  text: {
    type: String,
    trim: true,
    maxlength: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
