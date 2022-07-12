import { ReasonPhrases, StatusCodes } from "http-status-codes";

import HttpRequestManager from "../httpRequestManager";
import HTTPVERBS from "../utils/httpVerbs";

const BASEURL = "https://httpbin.org/";
let requestManager = new HttpRequestManager(BASEURL);

describe("Tests for the Request Manager operations", () => {
    beforeAll(() => {
        requestManager.user = {
            credentials: {
                username: "user",
                password: "pass",
            },
            headers: {
                Accept: "*/*",
                Authorization: "",
            },
        };
    });

    test("Get response 200 OK status when send a GET request to /get endpoint from the mock server", async () => {
        const response = await requestManager.makeRequest(HTTPVERBS.GET, "get");
        expect(response.status).toBe(StatusCodes.OK);
        expect(response.statusText).toMatch(ReasonPhrases.OK);
    });

    test("Get response 200 OK status when send a POST request to /post endpoint from the mock server", async () => {
        const response = await requestManager.makeRequest(HTTPVERBS.POST, "post");
        expect(response.status).toBe(StatusCodes.OK);
        expect(response.statusText).toMatch(ReasonPhrases.OK);
    });

    test("Get response 200 OK status when send a PUT request to /put endpoint from the mock server", async () => {
        const response = await requestManager.makeRequest(HTTPVERBS.PUT, "put");
        expect(response.status).toBe(StatusCodes.OK);
        expect(response.statusText).toMatch(ReasonPhrases.OK);
    });

    test("Get response 200 OK status when send a DELETE request to /delete endpoint from the mock server", async () => {
        const response = await requestManager.makeRequest(HTTPVERBS.DELETE, "delete");
        expect(response.status).toBe(StatusCodes.OK);
        expect(response.statusText).toMatch(ReasonPhrases.OK);
    });

    test("Get response 200 OK status when send a GET request with basic-auth to /basic-auth endpoint from the mock server", async () => {
        const basicAuth = `basic-auth/${requestManager.user.credentials.username}/${requestManager.user.credentials.password}`;
        const response = await requestManager.makeRequest(HTTPVERBS.GET, basicAuth);
        expect(response.status).toBe(StatusCodes.OK);
        expect(response.statusText).toMatch(ReasonPhrases.OK);
    });
});
