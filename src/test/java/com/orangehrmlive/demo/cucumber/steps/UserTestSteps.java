package com.orangehrmlive.demo.cucumber.steps;

import com.orangehrmlive.demo.pages.AddUserPage;
import com.orangehrmlive.demo.pages.AdminPage;
import com.orangehrmlive.demo.pages.DashboardPage;
import com.orangehrmlive.demo.pages.ViewSystemUsersPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserTestSteps {
    @When("^I click on 'Admin' tab$")
    public void iClickOnAdminTab() {
        new DashboardPage().clickAdminTab();
    }

    @And("^I verify 'System Users' text$")
    public void iVerifySystemUsersText() {
        new AdminPage().verifyUserVerifyText("System Users");
    }

    @And("^I click on 'Add' button$")
    public void iClickOnAddButton() {
        new AdminPage().clickAddButton();
    }

    @And("^I verify 'Add user' text$")
    public void iVerifyAddUserText() {
        new AddUserPage().verifyAddUserText("Add User");
    }

    @And("^I select user role 'Admin'$")
    public void iSelectUserRoleAdmin() {
        new AddUserPage().selectUserRole("Admin");
    }

    @And("^I enter 'Employee' name in field$")
    public void iEnterEmployeeNameInField() {
        new AddUserPage().sendEmployeeName("Ananya Dash");
    }

    @And("^I enter 'Username'$")
    public void iEnterUsername() {
        new AddUserPage().sendUserName("Ananya010");
    }
    @And("^I select user status 'Disable'$")
    public void iSelectUserStatusDisable() {
        new AddUserPage().selectUserStatus("Disabled");
    }

    @And("^I enter 'Password' in field$")
    public void iEnterPasswordInField() {
        new AddUserPage().sendPassword("Abc@1234");
    }

    @And("^I enter 'Confirm Password' in confirm password field$")
    public void iEnterConfirmPasswordInConfirmPasswordField() {
        new AddUserPage().sendConfirmPassword("Abc@1234");
    }
    @And("^I click on 'save' button$")
    public void iClickOnSaveButton() {
        new AddUserPage().clickSaveButton();
    }

    @Then("^I verify message that user 'Successfully saved'$")
    public void iVerifyMessageThatUserSuccessfullySaved() throws InterruptedException {
        new AddUserPage().verifyUserSavedMessage("Successfully Saved");
    }

    @And("^I enter 'username' in field$")
    public void iEnterUsernameInField() {
        new ViewSystemUsersPage().sendUserName("Ananya010");
    }

    @And("^I select user 'role' from field$")
    public void iSelectUserRoleFromField() {
        new ViewSystemUsersPage().selectUserRole("Admin");
    }

    @And("^I select 'status' from status field$")
    public void iSelectStatusFromStatusField() {
        new ViewSystemUsersPage().selectUserStatus("Disabled");
    }

    @And("^I click on 'Search' button$")
    public void iClickOnSearchButton() {
        new ViewSystemUsersPage().selectSearchButton();
    }

    @Then("^I verify that user in result list$")
    public void iVerifyThatUserInResultList() {
        new ViewSystemUsersPage().verifyUserList("Ananya010");
    }

    @And("^I Click on Check box$")
    public void iClickOnCheckBox() {
        new ViewSystemUsersPage().clickCheckBox();
    }

    @And("^I Click on Delete Button$")
    public void iClickOnDeleteButton() {
        new ViewSystemUsersPage().clickDeleteButton();
    }

    @And("^Click on Ok Button on Popup$")
    public void clickOnOkButtonOnPopup() {
        new ViewSystemUsersPage().clickDeletePopUp();
    }

    @Then("^I verify message that user 'Successfully Deleted'$")
    public void iVerifyMessageThatUserSuccessfullyDeleted() throws InterruptedException {
        new ViewSystemUsersPage().verifyUserDeletedMessage("Successfully Deleted");
    }

    @Then("^I verify message that 'No record found' for deleted user$")
    public void iVerifyMessageThatNoRecordFoundForDeletedUser() {
        new ViewSystemUsersPage().verifyNoRecordsFound("No Records Found");
    }
}
