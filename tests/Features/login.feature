Feature: Login Functionality

Verify user is able to login with valid credentials
Scenario: Successful Login with valid credentials
 Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
 And I click on "Sign in"
 When I login with phone "0456 321 100" and password "Password@1"
 And I click on "Continue"
 Then I should be redirected to "https://stage-webapp.honeypotexclusive.com/?from-login=true"

    
Scenario Outline: Verify user is not able to login with following credentials
Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
 And I click on "Sign in"
 When I login with phone "<phone>" and password "<password>"
 And I click on "Continue"
 Then I should verify user is not able to login and url contains "https://stage-webapp.honeypotexclusive.com/login"
Examples:
     |phone          | password |
     |9812345678     | Test     |
     |6342889989 | Test@123 |