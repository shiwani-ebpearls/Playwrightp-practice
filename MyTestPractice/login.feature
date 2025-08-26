Feature: Login Functionality

Verify user is able to login with valid credentials
Scenario: Successful Login with valid credentials
 Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
 And I click on "Sign in"
 When I login with phone "0456 321 100" and password "Password@1"
 Then I should see the homepage

    