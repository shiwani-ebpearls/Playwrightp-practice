// Generated from: tests/Features/login.feature
import { test } from "../../../tests/Fixtures/Fixtures.ts";

test.describe('Login Functionality', () => {

  test('Successful Login with valid credentials', async ({ Given, page, And, When, Then }) => { 
    await Given('I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"', null, { page }); 
    await And('I click on "Sign in"'); 
    await When('I login with phone "0456 321 100" and password "Password@1"'); 
    await And('I click on "Continue"'); 
    await Then('I should be redirected to "https://stage-webapp.honeypotexclusive.com/?from-login=true"'); 
  });

  test.describe('Verify user is not able to login with following credentials', () => {

    test('Example #1', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"', null, { page }); 
      await And('I click on "Sign in"'); 
      await When('I login with phone "9812345678" and password "Test"'); 
      await And('I click on "Continue"'); 
      await Then('I should verify user is not able to login and url contains "https://stage-webapp.honeypotexclusive.com/login"'); 
    });

    test('Example #2', async ({ Given, page, And, When, Then }) => { 
      await Given('I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"', null, { page }); 
      await And('I click on "Sign in"'); 
      await When('I login with phone "6342889989" and password "Test@123"'); 
      await And('I click on "Continue"'); 
      await Then('I should verify user is not able to login and url contains "https://stage-webapp.honeypotexclusive.com/login"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/Features/login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://stage-webapp.honeypotexclusive.com/onboarding\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://stage-webapp.honeypotexclusive.com/onboarding\"","children":[{"start":15,"value":"https://stage-webapp.honeypotexclusive.com/onboarding","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I click on \"Sign in\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Sign in\"","children":[{"start":12,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I login with phone \"0456 321 100\" and password \"Password@1\"","stepMatchArguments":[{"group":{"start":19,"value":"\"0456 321 100\"","children":[{"start":20,"value":"0456 321 100","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Password@1\"","children":[{"start":48,"value":"Password@1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click on \"Continue\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Continue\"","children":[{"start":12,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to \"https://stage-webapp.honeypotexclusive.com/?from-login=true\"","stepMatchArguments":[{"group":{"start":26,"value":"\"https://stage-webapp.honeypotexclusive.com/?from-login=true\"","children":[{"start":27,"value":"https://stage-webapp.honeypotexclusive.com/?from-login=true","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://stage-webapp.honeypotexclusive.com/onboarding\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://stage-webapp.honeypotexclusive.com/onboarding\"","children":[{"start":15,"value":"https://stage-webapp.honeypotexclusive.com/onboarding","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And I click on \"Sign in\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Sign in\"","children":[{"start":12,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I login with phone \"9812345678\" and password \"Test\"","stepMatchArguments":[{"group":{"start":19,"value":"\"9812345678\"","children":[{"start":20,"value":"9812345678","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"Test\"","children":[{"start":46,"value":"Test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I click on \"Continue\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Continue\"","children":[{"start":12,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"https://stage-webapp.honeypotexclusive.com/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"https://stage-webapp.honeypotexclusive.com/login\"","children":[{"start":60,"value":"https://stage-webapp.honeypotexclusive.com/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://stage-webapp.honeypotexclusive.com/onboarding\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://stage-webapp.honeypotexclusive.com/onboarding\"","children":[{"start":15,"value":"https://stage-webapp.honeypotexclusive.com/onboarding","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And I click on \"Sign in\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Sign in\"","children":[{"start":12,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I login with phone \"6342889989\" and password \"Test@123\"","stepMatchArguments":[{"group":{"start":19,"value":"\"6342889989\"","children":[{"start":20,"value":"6342889989","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"Test@123\"","children":[{"start":46,"value":"Test@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I click on \"Continue\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Continue\"","children":[{"start":12,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"https://stage-webapp.honeypotexclusive.com/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"https://stage-webapp.honeypotexclusive.com/login\"","children":[{"start":60,"value":"https://stage-webapp.honeypotexclusive.com/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end