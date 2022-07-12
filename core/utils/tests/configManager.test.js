import ConfigManager from "../configManager";

describe("Config Manager Test Cases", () => {
    beforeAll(() => {
        ConfigManager.conf = {
            environment: "testing",
        };
        ConfigManager.env = {
            baseUrl: "https://httpbin.org/",
        };
    });

    test("Verify environment value in conf file", () => {
        expect(ConfigManager.conf.environment).toBe("testing");
    });

    test("Verify baseUrl field in base url", () => {
        expect(ConfigManager.env.baseUrl).toBe("https://httpbin.org/");
    });
});
