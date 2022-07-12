import axios from "axios";

import ConfigManager from "../utils/configManager";
import Logger from "../utils/logger";

/**
 * Request Manager
 * Axios tool implementation
 */
export default class HttpRequestManager {
    baseUrl;
    user = ConfigManager.env.mainUser;

    /**
     * Constructor for HttpRequestManager
     * Useful to manage two different ports.
     * Make an instance with 9092 and another with 9093
     * @param {string} baseUrl
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * Make an HTTP request
     * @param verb HTTP method: get, post, put, delete
     * @param url The server URL that will be used for the request
     * @param body Request body, required query parameters
     * @returns {AxiosResponse}
     */
    async makeRequest(verb, url, body = "") {
        try {
            const response = await axios({
                method: verb,
                url: url,
                baseURL: this.baseUrl,
                responseType: "json",
                data: body,
                auth: this.user.credentials,
                headers: this.user.headers,
            });
            Logger.info(`${verb} to ${url} succeeded`);
            return response;
        } catch (error) {
            Logger.error(
                `${error.response.status}, ${verb}, ${url}, ${error.response.data}`,
            );
            return error.response;
        }
    }
}
