const { Queue } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const emailQueue = new Queue("emailQueue", { connection });

module.exports = emailQueue;
