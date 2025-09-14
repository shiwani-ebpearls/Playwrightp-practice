Feature: User Registration Flow

  Scenario: Successfully navigate from onboarding to register and submit phone number
    Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
    When I check the terms and conditions checkbox
    And I click on "Create an account" button
    Then I should be redirected to "https://stage-webapp.honeypotexclusive.com/register"
    When I enter phone number "440711223" in the "My number is" field
    And I click on the registration continue button
    When I enter OTP "123456" in the OTP input field
    And I click on the OTP continue button
    Then I should be redirected to the Password setup page
    When I enter password and new Password "SecurePass123!" in the password and confirm password fields
    And I click on the profile creation continue button
    Then I should be redirected to the My Birthday is page