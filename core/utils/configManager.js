const fs = require("fs");

/**
 * Conver JSON to object
 * @param {string} path file to resolve
 * @returns Json object
 */
const readJson = (path) => JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));

/**
 * Configuration Manager
 * Allows the management of configuration values for the different environments
 */
module.exports = class ConfigManager {
    /**
     * Return the values of the configFile
     */
    static conf = readJson("./.testcaferc.json");

    /**
     * Return the values of the environment selected in the configFile
     */
    static env = readJson("./environment.json")[ConfigManager.conf.environment];
};
