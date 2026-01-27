// Generated from: tests/A11y/features/lighthouseHome.feature
import { test } from "../../../../tests/UI_Test/fixture/fixture.ts";

test.describe('Accessibility Lighthouse on the home page', () => {

  test('Verify accessibility of the home page through Lighthouse', { tag: ['@accessibility'] }, async ({ Given, Then, homePage }) => { 
    await Given('I navigate to the home page', null, { homePage }); 
    await Then('I verify Lighthouse results for the home page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/A11y/features/lighthouseHome.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@accessibility"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I verify Lighthouse results for the home page","stepMatchArguments":[]}]},
]; // bdd-data-end