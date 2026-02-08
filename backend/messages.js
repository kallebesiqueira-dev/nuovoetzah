
const messageController = require("./controllers/messageController");

module.exports = {
  listMessages: messageController.listMessages,
  addMessage: messageController.addMessage,
};
