import { Validator } from "jsonschema";

/**
 * This class modelates the different functions needed in the project.
 */
class Actions {
    /**
     * This function verify that a JSON schema with a JSON response
     * @param {JSON} instance JSON response
     * @param {JSON} modelSchema JSON schema
     * @returns boolean
     */
    verifySchema(instance, modelSchema) {
        const v = new Validator();
        const schema = v.validate(instance, modelSchema);
        if (Object.keys(schema.errors).length > 0) {
            return { value: false, errors: schema.errors };
        }
        return { value: true };
    }
}

export default new Actions();
