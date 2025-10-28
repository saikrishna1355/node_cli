// src/workers/emailWorker.js
const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  maxRetriesPerRequest: null,
});

const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
    const { to, subject, body } = job.data;

    // Do your email sending logic here
    console.log(`📧 Sending email to: ${to}, subject: ${subject}`);
  },
  { connection }
);

emailWorker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} failed: ${err.message}`);
});
