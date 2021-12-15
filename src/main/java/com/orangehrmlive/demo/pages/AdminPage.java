package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminPage extends Utility {
    private static final Logger log = LogManager.getLogger(AdminPage.class.getName());

    public AdminPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='System Users']")
    WebElement systemUserVerify;

    @CacheLookup
    @FindBy(xpath = "//input[@id='btnAdd']")
    WebElement addButton;

    public void verifyUserVerifyText(String expectedMessage) {
        String message = getTextFromElement(systemUserVerify);
        verifyText(expectedMessage, message, "Message not displayed");
        log.info("Verify User text  : " + expectedMessage + systemUserVerify.toString());
    }

    public void clickAddButton() {
        clickOnElement(addButton);
        log.info("Click Add button  : " + addButton.toString());
    }
}
