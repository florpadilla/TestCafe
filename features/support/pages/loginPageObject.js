/* eslint-disable no-undef */
const {Selector} = require("testcafe");

exports.elements = {
    inputUsername : Selector("input").withAttribute("placeholder", "Username"),
    inputPassword: Selector("input").withAttribute("placeholder", "Password"),
    buttonSignIn: Selector("button").withText("Sign in"),
    labelErrorMessageLogin: Selector("label").withText(
        "Username or password are not correct",
    ),
    /**
     * Calls the Selector from the Node.js API callback.
     */
    navbarUsername: function () {
        return Selector(".header-navbar-username").with({ boundTestRun: testController });
    },
};
