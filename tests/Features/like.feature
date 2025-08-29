Feature: Like Profiles

  As a logged-in user
  I want to like multiple profiles
  So that I can save my interest in them

  Background:
    Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
    And I click on "Sign in"
    When I login with phone "0456 321 100" and password "Password@1"
    And I click on "Continue"
    Then I should be redirected to "https://stage-webapp.honeypotexclusive.com/?from-login=true"
    And I am on the Received/Exclusive page

  Scenario: Like multiple profiles
    When I like 3 visible profiles and save screenshots
    Then I should have screenshots saved for 3 profiles