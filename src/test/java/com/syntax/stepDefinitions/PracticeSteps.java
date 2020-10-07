package com.syntax.stepDefinitions;

import com.syntax.pages.PracticePage;
import com.syntax.utils.CommonMethods;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;

public class PracticeSteps {
	PracticePage report;
	
	@When("^I click on PIM$")
	public void i_click_on_PIM() throws Throwable {
		report = new PracticePage();
		CommonMethods.clickLink(report.PIMlink, "PIM");
		
	}

	@When("^click on reports$")
	public void click_on_reports() throws Throwable {
	    CommonMethods.clickLink(report.reportLink, "Reports");
	}

	@When("^I edit existing report$")
	public void i_edit_existing_report() throws Throwable {
	    CommonMethods.click(report.editBtn);
	    Thread.sleep(5000);
	}

}
