Feature: Login

    Users can login into the application

    @ui-01 @Smoke
    Scenario: Verify that a registered user can log in with valid credentials
        Given I navigate to the login page
        And I introduce the user values to login:
            | username | [credentials.username] |
            | password | [credentials.password] |
        When I click on submit button
        Then I verify that in the navbar is the name "Admin"

    @ui-02 @Smoke
    Scenario: Verify thsdfat a registered user can log in with valid credentials
        Given I navigate to the login page
        And I introduce the user values to login:
            | username | [credentials.username] |
            | password | [credentials.password] |
        When I click on submit button
