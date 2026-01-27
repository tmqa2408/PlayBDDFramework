Feature: Cart Page validation

  @cart
  Scenario: Verify user can add item to cart
    Given I navigate to the home page
    Then I verify the shopping cart is empty
    When I navigate to the cart page
    Then I should see the message "Your Shopping Cart is empty!"
    When I navigate to the home page
    Then I click AddToCart button for HTC One M8 Android
    When I navigate to the home page
    And the cart item count should be "1"
    Then I navigate to the cart page
    Then I delete M8_HTC_5L Picture of HTC One from the cart
    Then I verify the shopping cart is empty
