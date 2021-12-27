import winston from "winston";
import { loggerConfig } from "./config";

class Logger {
  private logger: winston.Logger;
  constructor() {
    this.logger = winston.createLogger(loggerConfig);
  }
  info(message: string) {
    this.logger.info(message);
  }
  error(message: string) {
    this.logger.error(message);
  }
  warn(message: string) {
    this.logger.warn(message);
  }
  debug(message: string) {
    this.logger.debug(message);
  }
  http(message: string) {
    this.logger.http(message);
  }
}


export const logger = new Logger();
