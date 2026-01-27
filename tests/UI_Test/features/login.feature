
Feature: Login/Logout page validation

  @smoke @login
  Scenario: Verify login with valid credentials
    Given I navigate to login page
    Then I verify that login page is displayed
    Then I login with valid email
    Then I enter valid password
    When I click on login button
    Then verify that the login is success

  @regression @login
  Scenario: Verify login with invalid credentials
    Given I navigate to login page
    Then I verify that login page is displayed
    Then I login with valid email
    When I click on login button
    Then verify that the login is unsuccessful
