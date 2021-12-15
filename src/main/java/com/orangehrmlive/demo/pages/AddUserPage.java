package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddUserPage.class.getName());

    public AddUserPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[@id='UserHeading']")
    WebElement addUserVerify;

    @CacheLookup
    @FindBy(xpath = "//select[@id='systemUser_userType']")
    WebElement userRole;

    @CacheLookup
    @FindBy(xpath = "//input[@id='systemUser_employeeName_empName']")
    WebElement employeeName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='systemUser_userName']")
    WebElement userName;

    @CacheLookup
    @FindBy(xpath = "//select[@id='systemUser_status']")
    WebElement userStatus;

    @CacheLookup
    @FindBy(xpath = "//input[@id='systemUser_password']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='systemUser_confirmPassword']")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(xpath = "//input[@id='btnSave']")
    WebElement saveButton;

    @CacheLookup
    //@FindBy(css = "#frmList_ohrmListComponent > script")
    @FindBy(xpath = "//div[contains(text(),'Successfully Saved')]")
    WebElement savedMessage;

    public void verifyAddUserText(String expectedMessage) {
        String message = getTextFromElement(addUserVerify);
        verifyText(expectedMessage, message, "Message not displayed");
        log.info("Verify Add user text  : " + expectedMessage + addUserVerify.toString());
    }

    public void selectUserRole(String role) {
        selectByVisibleTextFromDropDown(userRole, role);
        log.info("Send User role  : " + role + userRole.toString());
    }

    public void sendEmployeeName(String name) {
        sendKeysToElement(employeeName, name);
        log.info("Add Employee name  : " + name + employeeName.toString());
    }

    public void sendUserName(String user) {
        sendKeysToElement(userName, user);
        log.info("Add User name  : " + user + userName.toString());
    }

    public void selectUserStatus(String status) {
        selectByVisibleTextFromDropDown(userStatus, status);
        log.info("Select User status  : " + status + userStatus.toString());
    }

    public void sendPassword(String pw) {
        sendKeysToElement(password, pw);
        log.info("Send Password : " + pw + password.toString());
    }

    public void sendConfirmPassword(String cpw) {
        sendKeysToElement(confirmPassword, cpw);
        log.info("Send Confirm Password : " + cpw + confirmPassword.toString());
    }

    public void clickSaveButton() {
        clickOnElement(saveButton);
        log.info("Click save button : " + saveButton.toString());
    }

    public void verifyUserSavedMessage(String expectedMessage) throws InterruptedException {
        verifyThatTextIsDisplayed(savedMessage, expectedMessage);
        log.info("Verify User saved message  : " + expectedMessage + savedMessage.toString());
    }
}
