$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page test",
  "description": "",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5413398300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 121445600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 113687800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 64752900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2586204200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I want to verify User should login successfully",
  "description": "",
  "id": "login-page-test;i-want-to-verify-user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify \u0027Welcome\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iVerifyWelcomeMessage()"
});
formatter.result({
  "duration": 35096800,
  "status": "passed"
});
formatter.after({
  "duration": 116600,
  "status": "passed"
});
formatter.before({
  "duration": 3166045800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 87110000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 93666900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4746107800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I want to verify that the Logo display on HomePage",
  "description": "",
  "id": "login-page-test;i-want-to-verify-that-the-logo-display-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify \u0027Logo\u0027 displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 58800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iVerifyLogoDisplayed()"
});
formatter.result({
  "duration": 20126287700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //img[@alt\u003d\u0027OrangeHRM\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027192.168.50.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.orangehrmlive.demo.pages.HomePage.verifyLogoDisplayed(HomePage.java:50)\r\n\tat com.orangehrmlive.demo.cucumber.steps.LoginTestSteps.iVerifyLogoDisplayed(LoginTestSteps.java:42)\r\n\tat ???.Then I verify \u0027Logo\u0027 displayed(LoginTest.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 86824500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027192.168.50.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0cfecf00a7792cb9408cf691c130801c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53133}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53133/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0cfecf00a7792cb9408cf691c130801c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.orangehrmlive.demo.utility.Utility.getScreenshot(Utility.java:354)\r\n\tat com.orangehrmlive.demo.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3279275300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 82618100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 77201800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2646114500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 12800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I want to verify User should logout successfully",
  "description": "",
  "id": "login-page-test;i-want-to-verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on user \u0027Profile\u0027 logo",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on \u0027Logout\u0027 and click",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the text \u0027Login Panel\u0027 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 66042200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverOnLogoutAndClick()"
});
formatter.result({
  "duration": 546776000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iVerifyTheTextLoginPanelIsDisplayed()"
});
formatter.result({
  "duration": 53928300,
  "status": "passed"
});
formatter.after({
  "duration": 33600,
  "status": "passed"
});
formatter.uri("UsersTest.feature");
formatter.feature({
  "line": 1,
  "name": "User Test",
  "description": "",
  "id": "user-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3285206000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 82072700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 86159700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2595908200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a admin I should add user successfully",
  "description": "",
  "id": "user-test;as-a-admin-i-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify \u0027System Users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027Add\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify \u0027Add user\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select user role \u0027Admin\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u0027Employee\u0027 name in field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \u0027Username\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select user status \u0027Disable\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \u0027Password\u0027 in field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u0027Confirm Password\u0027 in confirm password field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \u0027save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify message that user \u0027Successfully saved\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1149704600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 34648400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 470394800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 43272500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 97672700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameInField()"
});
formatter.result({
  "duration": 113379300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 102892000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserStatusDisable()"
});
formatter.result({
  "duration": 72145900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterPasswordInField()"
});
formatter.result({
  "duration": 95545500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPasswordInConfirmPasswordField()"
});
formatter.result({
  "duration": 82605500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 61880500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageThatUserSuccessfullySaved()"
});
formatter.result({
  "duration": 28011600,
  "status": "passed"
});
formatter.after({
  "duration": 24100,
  "status": "passed"
});
formatter.before({
  "duration": 3490053800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 81653300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 104819000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2678859600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I am able to search the user created and verify it",
  "description": "",
  "id": "user-test;i-am-able-to-search-the-user-created-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Smoke"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify \u0027System Users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter \u0027username\u0027 in field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select user \u0027role\u0027 from field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select \u0027status\u0027 from status field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify that user in result list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1036697500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 35136600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsernameInField()"
});
formatter.result({
  "duration": 91978700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleFromField()"
});
formatter.result({
  "duration": 87018500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusFromStatusField()"
});
formatter.result({
  "duration": 99917000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 441214900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyThatUserInResultList()"
});
formatter.result({
  "duration": 36577400,
  "status": "passed"
});
formatter.after({
  "duration": 37600,
  "status": "passed"
});
formatter.before({
  "duration": 3453565200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 99545500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 98958900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2548495000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "I can verify that Admin should delete the user successfully",
  "description": "",
  "id": "user-test;i-can-verify-that-admin-should-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify \u0027System Users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter \u0027username\u0027 in field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select user \u0027role\u0027 from field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select \u0027status\u0027 from status field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify that user in result list",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Check box",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Click on Delete Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click on Ok Button on Popup",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I verify message that user \u0027Successfully Deleted\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1046079700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 42298000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsernameInField()"
});
formatter.result({
  "duration": 94581800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleFromField()"
});
formatter.result({
  "duration": 87208300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusFromStatusField()"
});
formatter.result({
  "duration": 91129800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 421639300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyThatUserInResultList()"
});
formatter.result({
  "duration": 51651300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 76196700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 86514600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.clickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 809651400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageThatUserSuccessfullyDeleted()"
});
formatter.result({
  "duration": 1048925900,
  "status": "passed"
});
formatter.after({
  "duration": 21900,
  "status": "passed"
});
formatter.before({
  "duration": 5627175000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \u0027Username\u0027 in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \u0027Password\u0027 in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Dashboard\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 156300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsernameInUsernameField()"
});
formatter.result({
  "duration": 157140700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 139779100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2545777300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmOnDashboardPage()"
});
formatter.result({
  "duration": 57500,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "I can search the deleted user and verify the message no record found",
  "description": "",
  "id": "user-test;i-can-search-the-deleted-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I verify \u0027System Users\u0027 text",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter \u0027username\u0027 in field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select user \u0027role\u0027 from field",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select \u0027status\u0027 from status field",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify message that \u0027No record found\u0027 for deleted user",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1478903400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 53630500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsernameInField()"
});
formatter.result({
  "duration": 110658500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleFromField()"
});
formatter.result({
  "duration": 110684000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusFromStatusField()"
});
formatter.result({
  "duration": 108751800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 547966700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageThatNoRecordFoundForDeletedUser()"
});
formatter.result({
  "duration": 64183600,
  "status": "passed"
});
formatter.after({
  "duration": 33800,
  "status": "passed"
});
});