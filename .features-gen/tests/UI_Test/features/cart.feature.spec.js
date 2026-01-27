// Generated from: tests/UI_Test/features/cart.feature
import { test } from "../../../../tests/UI_Test/fixture/fixture.ts";

test.describe('Cart Page validation', () => {

  test('Verify user can add item to cart', { tag: ['@cart'] }, async ({ Given, When, Then, And, homePage, page }) => { 
    await Given('I navigate to the home page', null, { homePage }); 
    await Then('I verify the shopping cart is empty', null, { page }); 
    await When('I navigate to the cart page', null, { page }); 
    await Then('I should see the message "Your Shopping Cart is empty!"', null, { page }); 
    await When('I navigate to the home page', null, { homePage }); 
    await Then('I click AddToCart button for HTC One M8 Android', null, { page }); 
    await When('I navigate to the home page', null, { homePage }); 
    await And('the cart item count should be "1"', null, { page }); 
    await Then('I navigate to the cart page', null, { page }); 
    await Then('I delete M8_HTC_5L Picture of HTC One from the cart', null, { page }); 
    await Then('I verify the shopping cart is empty', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/UI_Test/features/cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I verify the shopping cart is empty","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I navigate to the cart page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the message \"Your Shopping Cart is empty!\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Your Shopping Cart is empty!\"","children":[{"start":26,"value":"Your Shopping Cart is empty!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I click AddToCart button for HTC One M8 Android","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I navigate to the home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the cart item count should be \"1\"","stepMatchArguments":[{"group":{"start":30,"value":"\"1\"","children":[{"start":31,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I navigate to the cart page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I delete M8_HTC_5L Picture of HTC One from the cart","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I verify the shopping cart is empty","stepMatchArguments":[]}]},
]; // bdd-data-end