import winston, { format, info } from "winston";

export const loggerLevels = {
  levels: {
    error: 0,
    info: 1,
    warn: 2,
    http:3,
    debug: 4
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "cyan",
    debug: "green",
    http: "blue",
  },
};

export const loggerConfig = {
  level:'http',
  levels: loggerLevels.levels,
  transports: [
    new winston.transports.File({
      level: "info",
      filename: "logs/info.log",
      format: winston.format.json(),
    }),
    new winston.transports.File({
      level: "error",
      filename: "logs/error.log",
      format: winston.format.json(),
    }),
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format(info => ({ ...info, level: info.level.toUpperCase() }))(),
    winston.format.label({ label: "Notification Service" }),
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      ({ timestamp, level, message, label }) => `[${level}] [${[timestamp]}] [${label}] : ${message}`
    )
  ),
};
