Feature: Accessibility testing on the home page

  @accessibility
  Scenario: Verify accessibility of the home page
    Given I navigate to the home page
    Then I verify accessibility results for the home page

  @accessibility
  Scenario: Verify text alternatives for images on the home page
    Given I navigate to the home page
    Then I verify that each image element has a non-empty alt attribute

  @accessibility
  Scenario: Verify Image Description for images on the home page
    Given I navigate to the home page  
    Then I verify image descriptions on the home page


  # @accessibility
  # Scenario: Verify Color Contrast of the home page
  #   Given I navigate to the home page
  #   Then I verify the minimum color contrast ratio is met

  @accessibility 
  Scenario: Verify Keyboard Navigation on the home page
    Given I navigate to the home page
    Then I verify keyboard navigation functionality on the home page


  # @accessibility
  # Scenario: Verify Seizure Prevention on the home page  
  #   Given I navigate to the home page
  #   Then I verify seizure prevention guidelines are followed on the home page

  @accessibility
  Scenario: Verify Readability on the home page
    Given I navigate to the home page
    Then I verify text size on the home page is sufficient


  @accessibility
  Scenario: Verify using a keyboard or assistive technology on the home page
    Given I navigate to the home page
    Then I verify users can navigate and interact with content using a keyboard or assistive technology 