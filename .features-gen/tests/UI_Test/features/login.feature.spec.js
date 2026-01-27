// Generated from: tests/UI_Test/features/login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixture.ts";

test.describe('Login/Logout page validation', () => {

  test('Verify login with valid credentials', { tag: ['@smoke', '@login'] }, async ({ Given, When, Then, loginPage }) => { 
    await Given('I navigate to login page', null, { loginPage }); 
    await Then('I verify that login page is displayed', null, { loginPage }); 
    await Then('I login with valid email', null, { loginPage }); 
    await Then('I enter valid password', null, { loginPage }); 
    await When('I click on login button', null, { loginPage }); 
    await Then('verify that the login is success', null, { loginPage }); 
  });

  test('Verify login with invalid credentials', { tag: ['@regression', '@login'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I navigate to login page', null, { loginPage }); 
    await Then('I verify that login page is displayed', null, { loginPage }); 
    await Then('I login with valid email', null, { loginPage }); 
    await When('I click on login button', null, { loginPage }); 
    await Then('verify that the login is unsuccessful', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/UI_Test/features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@smoke","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I verify that login page is displayed","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I login with valid email","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I enter valid password","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then verify that the login is success","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@regression","@login"],"steps":[{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I navigate to login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I verify that login page is displayed","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I login with valid email","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then verify that the login is unsuccessful","stepMatchArguments":[]}]},
]; // bdd-data-end