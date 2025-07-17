package com.MobileTest.MobileScenarios;

import org.testng.annotations.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileTest.Utility.DriverSession;
import com.MobileTest.Utility.MobileElementUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T4_ScrollGesture {
  @Test
  public void testScroll() throws InterruptedException
  {
	  //create appium driver session
	  AppiumDriver driver=DriverSession.initDriverSession();
	  
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //get the page address/area
	  WebElement pageArea=driver.findElement(AppiumBy.id("android:id/list"));
	  
	  //perform gesture
	  
	  
	  MobileElementUtil.scrollAsPerUserChoice(driver,pageArea,3,"down");
	  
	  MobileElementUtil.getScreenshot(driver,"ScrollDown");
	  
	  Thread.sleep(2000);
	  
	  MobileElementUtil.scrollAsPerUserChoice(driver,pageArea,2,"up");
	  MobileElementUtil.getScreenshot(driver,"ScrollUp");
	  
//	  driver.executeScript("mobile:scrollGesture",ImmutableMap.of(
//			  
//			  "elementId",((RemoteWebElement)pageArea).getId(),
//			  "direction","down",
//			  "percent",1.0
//			  
//			  ));
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
