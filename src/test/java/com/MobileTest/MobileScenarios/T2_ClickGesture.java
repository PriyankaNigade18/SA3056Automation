package com.MobileTest.MobileScenarios;

import org.testng.annotations.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileTest.Utility.DriverSession;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T2_ClickGesture {
  @Test
  public void testClickGesture()
  {
	  //create appium driver session
	  AppiumDriver driver=DriverSession.initDriverSession();
	  
	  //click
	  //driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  WebElement ele=driver.findElement(AppiumBy.accessibilityId("Views"));
	  
	  //ClickGesture
	  driver.executeScript("mobile:clickGesture",ImmutableMap.of(
			  "elementId",((RemoteWebElement)ele).getId()
			  
			  ));
	  
	  System.out.println("Click Gesture is Completed!");
	  
	  
	  
  }
}
