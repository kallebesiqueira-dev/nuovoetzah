
const app = require("./app");
const { connectDb } = require("./db");
const { env, validateEnv } = require("./config/env");

async function startServer() {
	validateEnv();

	const server = app.listen(env.port, () => {
		console.log(`Servidor rodando na porta ${env.port}`);
	});

	const connectWithRetry = async () => {
		try {
			await connectDb();
			console.log("MongoDB conectado");
		} catch (error) {
			console.error("Falha ao conectar no MongoDB. Tentando novamente...", error);
			setTimeout(connectWithRetry, 5000);
		}
	};

	connectWithRetry();

	const shutdown = () => {
		server.close(() => {
			process.exit(0);
		});
	};

	process.on("SIGTERM", shutdown);
	process.on("SIGINT", shutdown);
	process.on("unhandledRejection", (error) => {
		console.error("Unhandled rejection:", error);
		shutdown();
	});
	process.on("uncaughtException", (error) => {
		console.error("Uncaught exception:", error);
		shutdown();
	});
}

startServer().catch((error) => {
	console.error("Falha ao iniciar o servidor:", error);
	process.exit(1);
});
