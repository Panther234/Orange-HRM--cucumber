package com.orangehrmlive.demo.cucumber.steps;

import com.orangehrmlive.demo.pages.DashboardPage;
import com.orangehrmlive.demo.pages.HomePage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestSteps {
    @Given("^I am on HomePage$")
    public void iAmOnHomePage() {
    }

    @When("^I enter 'Username' in username field$")
    public void iEnterUsernameInUsernameField() {
        new LoginPage().addUserName("Admin");
    }

    @And("^I enter 'Password' in password field$")
    public void iEnterPasswordInPasswordField() {
        new LoginPage().addPassword("admin123");
    }

    @And("^I Click on 'Login' button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickLogin();
    }

    @Then("^I am on 'Dashboard' page$")
    public void iAmOnDashboardPage() {
    }

    @Then("^I verify 'Welcome' message$")
    public void iVerifyWelcomeMessage() {
        new HomePage().verifyWelcomeText("welcome");
    }

    @Then("^I verify 'Logo' displayed$")
    public void iVerifyLogoDisplayed() {
        new HomePage().verifyLogoDisplayed();
    }

    @And("^I click on user 'Profile' logo$")
    public void iClickOnUserProfileLogo() {
        new DashboardPage().clickUserProfileLogo();
    }

    @And("^I mouse hover on 'Logout' and click$")
    public void iMouseHoverOnLogoutAndClick() throws InterruptedException {
        new DashboardPage().clickLogoutClick();
    }

    @Then("^I verify the text 'Login Panel' is displayed$")
    public void iVerifyTheTextLoginPanelIsDisplayed() {
        new DashboardPage().verifyLoginPanel("LOGIN Panel");
    }
}
