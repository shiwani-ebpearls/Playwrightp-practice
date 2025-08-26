// Generated from: MyTestPractice/login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Successful Login with valid credentials', async ({ Given, page, And, When, Then }) => { 
    await Given('I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"', null, { page }); 
    await And('I click on "Sign in"', null, { page }); 
    await When('I login with phone "0456 321 100" and password "Password@1"', null, { page }); 
    await Then('I should see the homepage', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('MyTestPractice/login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://stage-webapp.honeypotexclusive.com/onboarding\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://stage-webapp.honeypotexclusive.com/onboarding\"","children":[{"start":15,"value":"https://stage-webapp.honeypotexclusive.com/onboarding","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I click on \"Sign in\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Sign in\"","children":[{"start":12,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I login with phone \"0456 321 100\" and password \"Password@1\"","stepMatchArguments":[{"group":{"start":19,"value":"\"0456 321 100\"","children":[{"start":20,"value":"0456 321 100","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Password@1\"","children":[{"start":48,"value":"Password@1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the homepage","stepMatchArguments":[]}]},
]; // bdd-data-end