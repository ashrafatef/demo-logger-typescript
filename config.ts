import winston from "winston";

export const loggerLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  },
  colors: {
    ERROR: "red",
    WARN: "yellow",
    INFO: "cyan",
    DEBUG: "green",
  },
};

const formateLogger = winston.format.printf((info) => {
  return `[${info.level}] ${info.label}: [${[info.timestamp]}]: ${
    info.message
  }`;
});

export const loggerConfig = {
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
    new winston.transports.Console({level:'info'}),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.label({
      label: `Notification Service`,
    }),
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    winston.format.json(),
    formateLogger
  ),
};
