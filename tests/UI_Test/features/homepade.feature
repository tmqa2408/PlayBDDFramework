Feature: Home Page validation

  @homepage @regression
  Scenario: Verify elements of the home page
    Given I navigate to the home page
    Then I should see the logo at the top
    Then I should see the Computers menu
    Then I should see the Electronics menu
    Then I should see the Apparel menu
    Then I should see the Welcome to our store title
    Then I should see the search field
    Then I should see the search button
    Then I should see the Featured products section
  @accessibility
  Scenario: Verify accessibility of the home page
    Given I navigate to the home page
    Then I verify accessibility results for the home page