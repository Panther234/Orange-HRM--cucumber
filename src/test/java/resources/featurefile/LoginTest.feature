Feature: Login Page test

  Background:
    Given I am on HomePage
    When I enter 'Username' in username field
    And I enter 'Password' in password field
    And I Click on 'Login' button
    Then I am on 'Dashboard' page

  @Sanity @Regression
  Scenario: I want to verify User should login successfully
    When I am on 'Dashboard' page
    Then I verify 'Welcome' message

  @Smoke @Regression
  Scenario: I want to verify that the Logo display on HomePage
    When I am on 'Dashboard' page
    Then I verify 'Logo' displayed

  @Regression
  Scenario: I want to verify User should logout successfully
    When I am on 'Dashboard' page
    And I click on user 'Profile' logo
    And I mouse hover on 'Logout' and click
    Then I verify the text 'Login Panel' is displayed


