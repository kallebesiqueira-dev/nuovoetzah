const mongoose = require("mongoose");
const { env } = require("./config/env");

mongoose.set("strictQuery", true);

async function connectDb() {
  return mongoose.connect(env.mongodbUri, {
    autoIndex: env.nodeEnv !== "production",
  });
}

module.exports = { connectDb };
