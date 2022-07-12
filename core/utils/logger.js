import { createLogger, format, transports } from "winston";

import ConfigManager from "./configManager.js";

const { timestamp, combine, printf, errors, json } = format;

const timeFormat = timestamp({ format: "YYYY-MM-DD HH:mm:ss" });
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});

const logFile = ConfigManager.conf.logFile;
const defaultFile = "logs/report.log";
const maxSize = 5242880;
const maxFiles = 5;
const levelFile = "silly";

/**
 * Logger singleton implementation
 */
export default class Logger {

    /**
     * This function creates a logger with the File and Console settings
     */
    static winston = createLogger({
        transports: [
            new transports.File({
                filename: defaultFile,
                handleExceptions: true,
                maxsize: maxSize,
                maxFiles: maxFiles,
                level: levelFile,
                format: combine(timeFormat, errors({ stack: true }), json()),
                defaultMeta: { service: "user-service" },
            }),
            new transports.Console({
                level: logFile.levelConsole,
                format: combine(
                    format.colorize({ all: true }),
                    timestamp(timeFormat),
                    errors({ stack: true }),
                    logFormat,
                ),
            }),
        ],
    });

    /**
     * This function sends a text warning
     */
    static warn(message) {
        this.winston.log({level: "warn", message});
    }

    /**
     * This function sends a text information
     */
    static info(message) {
        this.winston.log({ level: "info", message});
    }

    /**
     * This function sends a text error
     */
    static error(message) {
        this.winston.log({ level: "error", message});
    }
}
