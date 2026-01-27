// Generated from: tests/A11y/features/a11y_home.feature
import { test } from "../../../../tests/UI_Test/fixture/fixture.ts";

test.describe('Accessibility testing on the home page', () => {

  test('Verify accessibility of the home page', { tag: ['@accessibility'] }, async ({ Given, Then, homePage, page }) => { 
    await Given('I navigate to the home page', null, { homePage }); 
    await Then('I verify accessibility results for the home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/A11y/features/a11y_home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@accessibility"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I verify accessibility results for the home page","stepMatchArguments":[]}]},
]; // bdd-data-end