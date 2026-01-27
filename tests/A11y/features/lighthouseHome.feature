Feature: Accessibility Lighthouse on the home page

  @accessibility
  Scenario: Verify accessibility of the home page through Lighthouse
    Given I navigate to the home page
    Then I verify Lighthouse results for the home page