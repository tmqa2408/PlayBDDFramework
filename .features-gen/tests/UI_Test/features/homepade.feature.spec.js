// Generated from: tests/UI_Test/features/homepade.feature
import { test } from "../../../../tests/UI_Test/fixture/fixture.ts";

test.describe('Home Page validation', () => {

  test('Verify elements of the home page', { tag: ['@homepage', '@regression'] }, async ({ Given, Then, homePage, page }) => { 
    await Given('I navigate to the home page', null, { homePage }); 
    await Then('I should see the logo at the top', null, { homePage, page }); 
    await Then('I should see the Computers menu', null, { homePage }); 
    await Then('I should see the Electronics menu', null, { homePage }); 
    await Then('I should see the Apparel menu', null, { homePage }); 
    await Then('I should see the Welcome to our store title', null, { homePage }); 
    await Then('I should see the search field', null, { homePage }); 
    await Then('I should see the search button', null, { homePage }); 
    await Then('I should see the Featured products section', null, { homePage }); 
  });

  test('Verify accessibility of the home page', { tag: ['@accessibility'] }, async ({ Given, Then, homePage, page }) => { 
    await Given('I navigate to the home page', null, { homePage }); 
    await Then('I verify accessibility results for the home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/UI_Test/features/homepade.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@homepage","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the logo at the top","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the Computers menu","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the Electronics menu","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the Apparel menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the Welcome to our store title","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see the search field","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the search button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the Featured products section","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":["@accessibility"],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I verify accessibility results for the home page","stepMatchArguments":[]}]},
]; // bdd-data-end