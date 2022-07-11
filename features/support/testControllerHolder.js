const testControllerHolder = {
    testController: null,
    captureResolver: null,
    getResolver: null,

    /**
     * This function is used to capture the testController object and return a promise to be resolved when the Cucumber script finishes.
     * This function will be called by the TestCafe test in the beginning.
     */
    capture: function(t) {
        console.log("esta ingresando al capture");
        testControllerHolder.testController = t;
        console.log(testControllerHolder.getResolver);
        if (testControllerHolder.getResolver) {
            console.log("esta ingresando al if del capture");
            testControllerHolder.getResolver(t);
        }
        console.log("ahora vuelvo a imprimir el getResolver");
        console.log(testControllerHolder.getResolver);
        console.log("paso el if deberia retornar promesa");
        return new Promise(function(resolve) {
            console.log("esta retornando la promesa y dandome el resolve");
            testControllerHolder.captureResolver = resolve;
        });
    },

    /**
     *This function is used to free the testController object.
     *This function will be called by the TestCafe test in the ending.
     */
    free: function() {
        testControllerHolder.testController = null;
        if (testControllerHolder.captureResolver) {
            testControllerHolder.captureResolver();
            console.log("entro al if del free");
        }
    },

    /**
     * This function is used to resolve and get the testControllerObject.
     * This function will be called by CucumberWorld and helps in setting up the controller asynchronously,
     * then add it to Cucumber’s world scope.
     */
    get: function() {
        return new Promise(function(resolve) {
            if (testControllerHolder.testController) {
                console.log("esta en el if del get del testcontrollerHolder");
                resolve(testControllerHolder.testController);
            } else {
                testControllerHolder.getResolver = resolve; //ver aqui. en lugar de linea 50 linea 48
                console.log("esta ingresando al else del get del testcontrollerHolder");
                resolve(testControllerHolder.testController);
            }
            console.log("salio del get");
            console.log(testControllerHolder.getResolver);
        });
    },
};

module.exports = testControllerHolder;
