$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Entitlements.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Masood Sidiqui"
    }
  ],
  "line": 2,
  "name": "Add entitlements",
  "description": "",
  "id": "add-entitlements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7179904167,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AddEntitlementsSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 6853658826,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 136956197,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Add Entitlements",
  "description": "",
  "id": "add-entitlements;add-entitlements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click Leave Module and click add Entitlements",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Add all default employees to FMLA US leave type",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter 50 Entitlement",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Confirm that all default employees have new Entitlements added for FMLA US",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEntitlementsSteps.i_click_Leave_Module_and_click_add_Entitlements()"
});
formatter.result({
  "duration": 1292736481,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (-9890, 188)\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-IQ4P7H3\u0027, ip: \u0027192.168.115.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\MASOOD~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54203}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 91b4fd5aafea6c881938546e78b043a8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.syntax.utils.CommonMethods.clickLink(CommonMethods.java:36)\r\n\tat com.syntax.stepDefinitions.AddEntitlementsSteps.i_click_Leave_Module_and_click_add_Entitlements(AddEntitlementsSteps.java:39)\r\n\tat ✽.When I click Leave Module and click add Entitlements(src/test/resources/features/Entitlements.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddEntitlementsSteps.add_all_default_employees_to_FMLA_US_leave_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 8
    }
  ],
  "location": "AddEntitlementsSteps.i_Enter_Entitlement(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddEntitlementsSteps.i_Confirm_that_all_default_employees_have_new_Entitlements_added_for_FMLA_US()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 699193118,
  "status": "passed"
});
formatter.before({
  "duration": 4865716816,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AddEntitlementsSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 6731298499,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 168256315,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Change Leave Type",
  "description": "",
  "id": "add-entitlements;change-leave-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I click Leave Module and click add Entitlements",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Add 1 default employees to any leave type besides FMLA US leave type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# this is what i entered \"Russel Hamilton\"); \"Vacation US\");"
    }
  ],
  "line": 19,
  "name": "I Enter 50 Entitlement",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Confirm that particular default employee has new Entitlements added for new Leave Type",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEntitlementsSteps.i_click_Leave_Module_and_click_add_Entitlements()"
});
formatter.result({
  "duration": 6650916509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "AddEntitlementsSteps.add_default_employees_to_any_leave_type_besides_FMLA_US_leave_type(int)"
});
formatter.result({
  "duration": 885412942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 8
    }
  ],
  "location": "AddEntitlementsSteps.i_Enter_Entitlement(int)"
});
formatter.result({
  "duration": 257681106,
  "status": "passed"
});
formatter.match({
  "location": "AddEntitlementsSteps.i_Confirm_that_particular_default_employee_has_new_Entitlements_added_for_new_Leave_Type()"
});
formatter.result({
  "duration": 5012037839,
  "status": "passed"
});
formatter.after({
  "duration": 797315767,
  "status": "passed"
});
formatter.before({
  "duration": 4814798805,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AddEntitlementsSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 6556442037,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 119671510,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Assign Leave",
  "description": "",
  "id": "add-entitlements;assign-leave",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I click Leave Module and click Assign Leave",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter any one of the default employee names",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# this is what i entered \"Steven Edwards\"); \"FMLA US"
    }
  ],
  "line": 26,
  "name": "I select FMLA US",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Balance of 50 should be present for employee",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select From Date",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select To Date that does not exceed 50 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see that the leave balance has changed based on how many days that was taken",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignLeaveSteps.i_click_Leave_Module_and_click_Assign_Leave()"
});
formatter.result({
  "duration": 1562538797,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_enter_any_one_of_the_default_employee_names()"
});
formatter.result({
  "duration": 341577721,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_select_FMLA_US()"
});
