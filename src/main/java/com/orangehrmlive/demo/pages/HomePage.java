package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@id='welcome']")
    WebElement verifyWelcome;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='OrangeHRM']")
    WebElement logoPanel;

    @CacheLookup
    @FindBy(xpath = "//b[normalize-space()='Admin']")
    WebElement adminMenu;

    @CacheLookup
    @FindBy(xpath = "//b[normalize-space()='PIM']")
    WebElement pIMMenu;

    @CacheLookup
    @FindBy(xpath = "//b[normalize-space()='Leave']")
    WebElement leaveMenu;

    @CacheLookup
    @FindBy(xpath = "//b[normalize-space()='Dashboard']")
    WebElement dashBordMenu;


    public void verifyWelcomeText(String text){
        verifyThatTextIsDisplayed(verifyWelcome, text);
        log.info("Verify Displayed Welcome text : " + text + verifyWelcome.toString());
    }

    public void verifyLogoDisplayed() {
        Boolean logoPresent = logoPanel.isDisplayed();
        Assert.assertTrue(logoPresent);
        if (logoPresent) {
            System.out.println("Logo present");
        } else {
            System.out.println("Logo not present");
        }
        log.info("Verify logo displayed : " + logoPanel.toString());
    }
}
