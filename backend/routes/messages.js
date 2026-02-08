
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const validate = require("../middlewares/validate");
const messageValidation = require("../validations/messages");
const { requireAuth, optionalAuth } = require("../middlewares/auth");
const { authLimiter } = require("../middlewares/rateLimit");

router.get(
	"/",
	requireAuth,
	validate(messageValidation.listMessages),
	messageController.listMessages
);
router.post(
	"/",
	authLimiter,
	optionalAuth,
	validate(messageValidation.createMessage),
	messageController.addMessage
);

module.exports = router;
