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
    console.log("entró en el customWorld. O sea que sí esta llamando a la funcion get en breve")
    console.log(testControllerHolder.testController);
    console.log(testControllerHolder.captureResolver);
    this.waitForTestController = testControllerHolder.get()
        .then(function(tc) {
            console.log("esta ingresando al then del waitForTestController del customWorld y retorna el tc");
            return testController = tc;
        });
}
setWorldConstructor(CustomWorld);