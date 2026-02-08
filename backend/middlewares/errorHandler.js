const { env } = require("../config/env");

function notFoundHandler(req, res) {
  res.status(404).json({ message: "Rota nao encontrada." });
}

function errorHandler(err, req, res, next) {
  if (env.nodeEnv !== "production") {
    console.error(err);
  }

  const status = err.status || 500;
  const message = err.message || "Erro interno do servidor.";

  res.status(status).json({ message });
}

module.exports = { notFoundHandler, errorHandler };
