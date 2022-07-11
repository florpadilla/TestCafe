/* eslint-disable no-undef */
const examplePage = require("../support/pages/loginPageObject.js");
const {Given, When, Then} = require("@cucumber/cucumber");

Given("I navigate to the login page", async function () {
    await testController.navigateTo("http://localhost:4200/");
});

Given("I introduce the user values to login:", async function(table) {
    userValues = table.rowsHash();
    Object.keys(userValues).forEach((Key) => {
        userValues[Key] = user[Key];
    });
    const nameField = examplePage.elements.inputUsername();
    await testController.typeText(nameField, userValues.username);
    const passwordField = examplePage.elements.inputPassword();
    await testController.typeText(passwordField, userValues.password);
});

When("I click on submit button", async function () {
    const submitButton = examplePage.elements.buttonSignIn();
    await testController.click(submitButton);
});

Then("I verify that in the navbar is the name {string}", async function (string) {
    const navBarMessage = examplePage.elements.navbarUsername();
    await testController.expect(navBarMessage.innerText).contains(string);
});
