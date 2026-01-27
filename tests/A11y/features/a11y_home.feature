Feature: Accessibility testing on the home page

  @accessibility
  Scenario: Verify accessibility of the home page
    Given I navigate to the home page
    Then I verify accessibility results for the home page