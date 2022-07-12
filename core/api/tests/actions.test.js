import testSchemas from "../tests/schemas/testSchema.json";
import Actions from "../utils/actions";

describe("Tests for the Actions methods", () => {
    test("Verify that verifySchema response is true when received object has the expected schema", () => {
        const instance1 = { name: "Sergio" };

        expect(Actions.verifySchema(instance1, testSchemas.test1).value).toBe(true);
    });

    test("Verify that verifySchema response is false when received object doesn't have the expected schema", () => {
        const instance3 = { name: 8 };

        expect(Actions.verifySchema(instance3, testSchemas.test1).value).toBe(false);
    });

    test("Verify that verifySchema response is true when bootcamp information matches with the expected schema", () => {
        const instance2 = {
            name: "sergio",
            age: 29,
            address: "achumani",
            ocupation: "Automation tester",
            married: false,
            DNI: 12345678,
            cellphone: 78945612,
            secrets: null,
            money: -50,
        };
        expect(Actions.verifySchema(instance2, testSchemas.test2).value).toBe(true);
    });

    test("Verify that verifySchema response is false when received object has more attributes than expected schema", () => {
        const instance4 = {
            name: "sergio",
            age: 29,
            address: "achumani",
            ocupation: "Automation tester",
            married: false,
            DNI: 12345678,
            cellphone: 78945612,
            secrets: null,
            money: -50,
            pets: true,
        };
        expect(Actions.verifySchema(instance4, testSchemas.test2).value).toBe(false);
    });

    test("Verify that multiple verification schema can validate tests schemas", () => {
        const instance5 = [
            {
                name: "Sergio",
                age: 29,
                address: "achumani",
                ocupation: "Automation tester",
                married: false,
                DNI: 12345678,
                cellphone: 78945612,
                secrets: null,
                money: 50,
            },
            {
                name: "Paulo",
                age: 30,
                address: "Centro",
                ocupation: "ice seller",
                married: true,
                DNI: 456456789,
                cellphone: 741852963,
                secrets: "He is a really good singer",
                money: 100,
            },
        ];
        const instance6 = [
            {
                name: 56,
                age: 29,
                address: "achumani",
                ocupation: "Automation tester",
                married: false,
                DNI: 12345678,
                cellphone: 78945612,
                secrets: null,
                money: -50,
            },
            {
                name: "Paulo",
                age: 30,
                address: "Centro",
                ocupation: "ice seller",
                married: true,
                DNI: 456456789,
                cellphone: 741852963,
                secrets: "He is a really good singer",
                money: 100,
            },
        ];
        expect(Actions.verifySchema(instance5, testSchemas.test3).value).toBe(true);
        expect(Actions.verifySchema(instance6, testSchemas.test3).value).toBe(false);
    });
});
