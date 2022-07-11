/* eslint-disable no-undef */
const {setWorldConstructor} = require("@cucumber/cucumber");
const testControllerHolder = require("./testControllerHolder");

/**
 *World is an isolated context for each cucumber scenario, exposed to the hooks and steps.
 */
function CustomWorld() {
    /*
     *It calls the testControllerHolder.get function to trigger the promise to return the testController.
     */
    this.waitForTestController = testControllerHolder.get()
        .then(function(tc) {
            return testController = tc;
        });
}
setWorldConstructor(CustomWorld);