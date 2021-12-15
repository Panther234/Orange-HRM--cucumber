package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='txtUsername']")
    WebElement userName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='txtPassword']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='btnLogin']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//div[@id='logInPanelHeading']")
    WebElement loginPanel;


    public void addUserName(String name) {
        sendKeysToElement(userName, name);
        log.info("Verify text : " + name + userName.toString());
    }
    public void addPassword(String pw) {
        sendKeysToElement(password, pw);
        log.info("Verify text : " + pw + password.toString());
    }
    public void clickLogin() {
        clickOnElement(loginButton);
        log.info("Verify text : " + loginButton.toString());
    }

    public void loginToApplication(String expectedMessage, String name, String pw) {
        String Message = getTextFromElement(loginPanel);
        verifyText(expectedMessage, Message, "Element not displayed");
        sendKeysToElement(userName, name);
        sendKeysToElement(password, pw);
        clickOnElement(loginButton);
    }
}
