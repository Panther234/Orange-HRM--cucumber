package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashboardPage extends Utility {
    private static final Logger log = LogManager.getLogger(DashboardPage.class.getName());

    public DashboardPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//b[normalize-space()='Admin']")
    WebElement adminTab;

    @CacheLookup
    @FindBy(xpath = "//a[@id='welcome']")
    WebElement userProfileLogo;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Logout']")
    WebElement logoutClick;

    @CacheLookup
    @FindBy(xpath = "//div[@id='logInPanelHeading']")
    WebElement loginPanel;

    public void clickAdminTab() {
        clickOnElement(adminTab);
        log.info("Click Admin tab : " + adminTab.toString());
    }

    public void clickUserProfileLogo() {
        clickOnElement(userProfileLogo);
        log.info("Click User profile : " + userProfileLogo.toString());
    }

    public void clickLogoutClick() throws InterruptedException {
        clickOnElement(logoutClick);
        log.info("Click Logout : " + logoutClick.toString());
    }

    public void verifyLoginPanel(String expectedMessage) {
        String message = getTextFromElement(loginPanel);
        verifyText(expectedMessage, message, "Message not displayed");
        log.info("Verify LoginPanel  : " +expectedMessage+ loginPanel.toString());
    }
}
