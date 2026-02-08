
const { verifyAccessToken } = require("../utils/jwt");

function getToken(req) {
	const authHeader = req.headers.authorization || "";
	if (!authHeader.startsWith("Bearer ")) return null;
	return authHeader.slice(7);
}

function requireAuth(req, res, next) {
	const token = getToken(req);
	if (!token) {
		return res.status(401).json({ message: "Token nao fornecido." });
	}

	try {
		const payload = verifyAccessToken(token);
		req.user = { id: payload.sub, username: payload.username };
		return next();
	} catch (error) {
		return res.status(403).json({ message: "Token invalido." });
	}
}

function optionalAuth(req, res, next) {
	const token = getToken(req);
	if (!token) return next();

	try {
		const payload = verifyAccessToken(token);
		req.user = { id: payload.sub, username: payload.username };
	} catch (error) {
		req.user = null;
	}

	return next();
}

module.exports = { requireAuth, optionalAuth };
