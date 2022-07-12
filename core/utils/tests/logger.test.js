import Logger from "../logger";

jest.mock("../logger.js", () => ({
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
}),
);

describe("Logger Test Cases", () => {

    test("Verify info logger function is working", () => {
        let result = Logger.info("Hello World");
        expect(result).toBeUndefined();
        expect(Logger.info).toHaveBeenCalled();
        expect(Logger.info).toHaveBeenCalledTimes(1);
    });

    test("Verify error logger function is working", () => {
        let result = Logger.error("Hello World");
        expect(result).toBeUndefined();
        expect(Logger.error).toHaveBeenCalled();
        expect(Logger.error).toHaveBeenCalledTimes(1);
    });

    test("Verify error warn function is working", () => {
        let result = Logger.warn("Hello World");
        expect(result).toBeUndefined();
        expect(Logger.warn).toHaveBeenCalled();
        expect(Logger.warn).toHaveBeenCalledTimes(1);
    });

});
