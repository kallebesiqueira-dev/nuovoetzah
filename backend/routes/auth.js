
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validate = require("../middlewares/validate");
const authValidation = require("../validations/auth");
const { authLimiter } = require("../middlewares/rateLimit");
const { requireAuth, optionalAuth } = require("../middlewares/auth");

router.post(
	"/register",
	authLimiter,
	validate(authValidation.register),
	authController.register
);
router.post(
	"/login",
	authLimiter,
	validate(authValidation.login),
	authController.login
);
router.post(
	"/refresh",
	authLimiter,
	validate(authValidation.refresh),
	authController.refresh
);
router.post(
	"/logout",
	optionalAuth,
	validate(authValidation.logout),
	authController.logout
);
router.get("/me", requireAuth, authController.me);

module.exports = router;
