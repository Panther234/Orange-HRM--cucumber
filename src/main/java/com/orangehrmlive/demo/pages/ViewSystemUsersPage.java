package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ViewSystemUsersPage extends Utility {
    private static final Logger log = LogManager.getLogger(ViewSystemUsersPage.class.getName());

    public ViewSystemUsersPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='searchSystemUser_userName']")
    WebElement userName;

    @CacheLookup
    @FindBy(xpath = "//select[@id='searchSystemUser_userType']")
    WebElement userRole;

    @CacheLookup
    @FindBy(xpath = "//select[@id='searchSystemUser_status']")
    WebElement userStatus;

    @CacheLookup
    @FindBy(xpath = "//input[@id='searchBtn']")
    WebElement searchButton;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Ananya010']")
    WebElement userList;

    @CacheLookup
    @FindBy(css = "#ohrmList_chkSelectAll")
    WebElement checkBox;

    @CacheLookup
    @FindBy(xpath = "//input[@id='btnDelete']")
    WebElement deleteButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='dialogDeleteBtn']")
    WebElement deletePopUp;

    @CacheLookup
    //@FindBy(css = "div[id='successDataModal'] div[class='modal-body']")
    @FindBy(xpath = "//div[contains(text(),'Successfully Deleted')]")
    WebElement deleteMessageDialog;

    @CacheLookup
    @FindBy(xpath = "//td[normalize-space()='No Records Found']")
    WebElement noRecordsFound;

    public void sendUserName(String name) {
        sendKeysToElement(userName, name);
        log.info("Send User Name : " + name + userName.toString());
    }

    public void selectUserRole(String role) {
        selectByVisibleTextFromDropDown(userRole, role);
        log.info("Select UserRole : " + role + userRole.toString());
    }

    public void selectUserStatus(String status) {
        selectByVisibleTextFromDropDown(userStatus, status);
        log.info("Select User Status : " + status + userStatus.toString());
    }

    public void selectSearchButton() {
        clickOnElement(searchButton);
        log.info("Select Search Button : " + searchButton.toString());
    }

    public void verifyUserList(String expectedMessage) {
        String actualMessage = userList.getText();
        verifyText(expectedMessage,actualMessage, "User not in list");
       // verifyText(expectedMessage, userList, "User not in list");
        log.info("Verify User list : " + expectedMessage + userList.toString());
    }

    public void clickCheckBox() {
        clickOnElement(checkBox);
        log.info("Select Check box : " + checkBox.toString());
    }

    public void clickDeleteButton() {
        clickOnElement(deleteButton);
        log.info("Click Delete Button : " + deleteButton.toString());
    }

    public void clickDeletePopUp() {
        clickOnElement(deletePopUp);
        log.info("Click Delete Popup : " + deletePopUp.toString());
    }

    public void verifyUserDeletedMessage(String expectedMessage) throws InterruptedException {
        Thread.sleep(1000);
        verifyThatTextIsDisplayed(deleteMessageDialog, expectedMessage);
        log.info("Verify user delete message: " + expectedMessage + deleteMessageDialog.toString());
    }

    public void verifyNoRecordsFound(String expectedMessage) {
        String message = getTextFromElement(noRecordsFound);
        verifyText(expectedMessage, message, "Error: Record found");
        log.info("Verify No record message : " + expectedMessage + noRecordsFound.toString());
    }
}
