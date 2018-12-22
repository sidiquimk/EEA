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
  "duration": 6821645904,
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
  "duration": 6782123261,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 166690045,
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
  "duration": 6529732465,
  "status": "passed"
});
formatter.match({
  "location": "AddEntitlementsSteps.add_all_default_employees_to_FMLA_US_leave_type()"
});
formatter.result({
  "duration": 6401242585,
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
  "duration": 309929103,
  "status": "passed"
});
formatter.match({
  "location": "AddEntitlementsSteps.i_Confirm_that_all_default_employees_have_new_Entitlements_added_for_FMLA_US()"
});
formatter.result({
  "duration": 6345476011,
  "status": "passed"
});
formatter.after({
  "duration": 799349468,
  "status": "passed"
});
formatter.before({
  "duration": 4876616303,
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
  "duration": 6772602360,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 94978255,
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
  "duration": 6647709685,
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
  "duration": 881431280,
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
  "duration": 103304696,
  "status": "passed"
});
formatter.match({
  "location": "AddEntitlementsSteps.i_Confirm_that_particular_default_employee_has_new_Entitlements_added_for_new_Leave_Type()"
});
formatter.result({
  "duration": 5000586364,
  "status": "passed"
});
formatter.after({
  "duration": 802854216,
  "status": "passed"
});
formatter.before({
  "duration": 4706218417,
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
  "duration": 6627938881,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 183007073,
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
  "duration": 1940276657,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_enter_any_one_of_the_default_employee_names()"
});
formatter.result({
  "duration": 354684369,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_select_FMLA_US()"
});
formatter.result({
  "duration": 5210336199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 11
    }
  ],
  "location": "AssignLeaveSteps.balance_of_should_be_present_for_employee(int)"
});
formatter.result({
  "duration": 144030096,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_select_From_Date()"
});
formatter.result({
  "duration": 2592163985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "AssignLeaveSteps.i_select_To_Date_that_does_not_exceed_days(int)"
});
formatter.result({
  "duration": 7950950134,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_should_see_that_the_leave_balance_has_changed_based_on_how_many_days_that_was_taken()"
});
formatter.result({
  "duration": 88718704,
  "status": "passed"
});
formatter.after({
  "duration": 907569108,
  "status": "passed"
});
formatter.before({
  "duration": 4852303947,
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
  "duration": 6605494275,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 141467719,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Leave Type for unique employee",
  "description": "",
  "id": "add-entitlements;leave-type-for-unique-employee",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I click Leave Module and click Assign Leave",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter the unique default employee name who was chosen for a different Leave Type",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#this is what i entered \"Russel Hamilton\"); \"Vacation US\");"
    }
  ],
  "line": 36,
  "name": "I select any Leave Type",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Balance of 50 should be present for employee",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select From Date",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select To Date that does not exceed 50 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should see that the leave balance has changed based on how many days that was taken",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignLeaveSteps.i_click_Leave_Module_and_click_Assign_Leave()"
});
formatter.result({
  "duration": 1540443084,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_enter_the_unique_default_employee_name_who_was_chosen_for_a_different_Leave_Type()"
});
formatter.result({
  "duration": 319210558,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_select_any_Leave_Type()"
});
formatter.result({
  "duration": 1148875102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 11
    }
  ],
  "location": "AssignLeaveSteps.balance_of_should_be_present_for_employee(int)"
});
formatter.result({
  "duration": 82512892,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_select_From_Date()"
});
formatter.result({
  "duration": 2338347190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "AssignLeaveSteps.i_select_To_Date_that_does_not_exceed_days(int)"
});
formatter.result({
  "duration": 7688369889,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_should_see_that_the_leave_balance_has_changed_based_on_how_many_days_that_was_taken()"
});
formatter.result({
  "duration": 36057409,
  "status": "passed"
});
formatter.after({
  "duration": 765638699,
  "status": "passed"
});
formatter.before({
  "duration": 4740699677,
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
  "duration": 6594439503,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 100070609,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Leave List",
  "description": "",
  "id": "add-entitlements;leave-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I click Leave Module and click Leave List",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I select From Date that matches the assign leave to default employee",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select To Date that matches the assign leave to default employee",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select on All from show leave with the status",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter the default employee name",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 48,
      "value": "#this is what i entered \"Russel Hamilton\""
    }
  ],
  "line": 49,
  "name": "I select Sub Unit that matches the default employee credentials",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click Search",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Verify that default employee name appears",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Verify leave type displayed as FMLA US",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Verify Number of days matches the amount of assigned leave given for default employee",
  "keyword": "And "
});
formatter.match({
  "location": "LeaveListSteps.i_click_Leave_Module_and_click_Leave_List()"
});
formatter.result({
  "duration": 2352451526,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.i_select_From_Date_that_matches_the_assign_leave_to_default_employee()"
});
formatter.result({
  "duration": 2426661288,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.i_select_To_Date_that_matches_the_assign_leave_to_default_employee()"
});
formatter.result({
  "duration": 3311618652,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.i_select_on_All_from_show_leave_with_the_status()"
});
formatter.result({
  "duration": 5362718419,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.i_enter_the_default_employee_name()"
});
formatter.result({
  "duration": 2499774187,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.i_select_Sub_Unit_that_matches_the_default_employee_credentials()"
});
formatter.result({
  "duration": 2344765579,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.click_Search()"
});
formatter.result({
  "duration": 5034712012,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.verify_that_default_employee_name_appears()"
});
formatter.result({
  "duration": 2160400466,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.verify_leave_type_displayed_as_FMLA_US()"
});
formatter.result({
  "duration": 2156038300,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.verify_Number_of_days_matches_the_amount_of_assigned_leave_given_for_default_employee()"
});
formatter.result({
  "duration": 2078042067,
  "status": "passed"
});
formatter.after({
  "duration": 843496244,
  "status": "passed"
});
formatter.before({
  "duration": 4570547558,
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
  "duration": 6672289145,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 85456959,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "LeaveList2",
  "description": "",
  "id": "add-entitlements;leavelist2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I click Leave Module and click Leave List",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I select From Date that matches the assign leave to Unique default employee",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select To Date that matches the assign leave to Unique default employee",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select on All from show leave with the status",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter the Unique default employee name",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 61,
      "value": "# this is what i entered: Russel Hamilton\""
    }
  ],
  "line": 62,
  "name": "I select Sub Unit that matches the Unique default employee credentials",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Click Search",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Verify that Unique default employee name appears",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify leave type displays as the given Leave Type Assigned Unique default employee",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Verify Number of days matches the amount of assigned leave given for Unique default employee",
  "keyword": "And "
});
formatter.match({
  "location": "LeaveListSteps.i_click_Leave_Module_and_click_Leave_List()"
});
formatter.result({
  "duration": 2295224179,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.i_select_From_Date_that_matches_the_assign_leave_to_Unique_default_employee()"
});
formatter.result({
  "duration": 2480774664,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.i_select_To_Date_that_matches_the_assign_leave_to_Unique_default_employee()"
});
formatter.result({
  "duration": 3361846382,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.i_select_on_All_from_show_leave_with_the_status()"
});
formatter.result({
  "duration": 5514483062,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.i_enter_the_Unique_default_employee_name()"
});
formatter.result({
  "duration": 2351291442,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.i_select_Sub_Unit_that_matches_the_Unique_default_employee_credentials()"
});
formatter.result({
  "duration": 2278027210,
  "status": "passed"
});
formatter.match({
  "location": "LeaveListSteps.click_Search()"
});
formatter.result({
  "duration": 5000111820,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.verify_that_Unique_default_employee_name_appears()"
});
formatter.result({
  "duration": 2122387195,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.verify_leave_type_displays_as_the_given_Leave_Type_Assigned_Unique_default_employee()"
});
formatter.result({
  "duration": 2108809164,
  "status": "passed"
});
formatter.match({
  "location": "LeaveList2Steps.verify_Number_of_days_matches_the_amount_of_assigned_leave_given_for_Unique_default_employee()"
});
formatter.result({
  "duration": 2128063147,
  "status": "passed"
});
formatter.after({
  "duration": 784098089,
  "status": "passed"
});
});