const winston = require("winston");
require("winston-daily-rotate-file");

// Daily log transport
const dailyTransport = new winston.transports.DailyRotateFile({
  filename: "logs/%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "14d", // Keep logs for 14 days
});

// Logger config
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      (info) =>
        `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`
    )
  ),
  transports: [new winston.transports.Console(), dailyTransport],
});
global.Log = logger;
module.exports = logger;
