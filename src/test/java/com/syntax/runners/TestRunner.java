package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features/Entitlements.feature"}
				, glue= {"com/syntax/stepDefinitions"}
				, plugin = {"pretty", "html:test-output"}
				, monochrome = true
				, dryRun=false)

///////
public class TestRunner {

}
