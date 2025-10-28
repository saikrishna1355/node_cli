// src/jobs/addEmailJob.ts (or .js)
const emailQueue = require("../queues/emailQueue");

const addEmailJob = async ({ to, subject, body }) => {
  await emailQueue.add("emailQueue", { to, subject, body });
};

module.exports = addEmailJob;
