Feature: User Registration Flow

  Scenario: Successfully navigate from onboarding to register and submit phone number
    Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
    When I check the terms and conditions checkbox
    And I click on "Create an account" button
    Then I should be redirected to "https://stage-webapp.honeypotexclusive.com/register"
    When I enter phone number "440711223" in the "My number is" field
    And I click on the continue button