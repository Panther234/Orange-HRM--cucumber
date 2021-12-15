Feature: User Test

  Background:
    Given I am on HomePage
    When I enter 'Username' in username field
    And I enter 'Password' in password field
    And I Click on 'Login' button
    Then I am on 'Dashboard' page

  @Sanity @Smoke @Regression
  Scenario: As a admin I should add user successfully
    When I click on 'Admin' tab
    And I verify 'System Users' text
    And I click on 'Add' button
    And I verify 'Add user' text
    And I select user role 'Admin'
    And I enter 'Employee' name in field
    And I enter 'Username'
    And I select user status 'Disable'
    And I enter 'Password' in field
    And I enter 'Confirm Password' in confirm password field
    And I click on 'save' button
    Then I verify message that user 'Successfully saved'

  @Smoke @Regression
  Scenario: I am able to search the user created and verify it
    When I click on 'Admin' tab
    And I verify 'System Users' text
    And I enter 'username' in field
    And I select user 'role' from field
    And I select 'status' from status field
    And I click on 'Search' button
    Then I verify that user in result list

  @Regression
  Scenario: I can verify that Admin should delete the user successfully
    When I click on 'Admin' tab
    And I verify 'System Users' text
    And I enter 'username' in field
    And I select user 'role' from field
    And I select 'status' from status field
    And I click on 'Search' button
    And I verify that user in result list
    And I Click on Check box
    And I Click on Delete Button
    And Click on Ok Button on Popup
    Then I verify message that user 'Successfully Deleted'

  @Regression
  Scenario: I can search the deleted user and verify the message no record found
    When I click on 'Admin' tab
    And I verify 'System Users' text
    And I enter 'username' in field
    And I select user 'role' from field
    And I select 'status' from status field
    And I click on 'Search' button
    Then I verify message that 'No record found' for deleted user