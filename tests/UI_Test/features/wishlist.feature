Feature: Wishlist Page validation

  @wishlist
  Scenario: Verify user can check that wishlist is empty
    Given I navigate to the home page
    Then I verify the wishlist is empty
    When I navigate to the wishlist page
    Then I should see the message "The wishlist is empty!"


    @wishlist
    Scenario: Verify user can add item to wishlist
      Given I navigate to the home page
      Then I click AddToWishlist button for HTC One M8 Android
      When I navigate to the wishlist page
      Then I should see the item "HTC One M8 Android" in the wishlist


    @wishlist
    Scenario: Verify user can delete item from wishlist
      Given I navigate to the home page
      Then I click AddToWishlist button for HTC One M8 Android
      When I navigate to the wishlist page
      Then I delete M8_HTC_5L Picture of HTC One from the wishlist
      Then I verify the wishlist is empty