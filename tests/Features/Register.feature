Feature: User onboarding and subscription
  As a new user
  I want to complete the registration flow
  So that I can start using Honeypot Exclusive

  Scenario: Successful registration, profile setup and subscription
    Given I am on the onboarding page
    When I accept the terms and start registration
    And I provide my phone number
    And I verify my code
    And I set my password
    And I enter my birthday
    And I select my gender
    And I choose my preferences
    And I enter my first name
    And I select my interests
    And I choose what I am looking for
    And I upload my profile images and bio
    And I set my location
    And I select a subscription plan
    And I complete PayPal login and checkout
    Then I should see the start matching option
