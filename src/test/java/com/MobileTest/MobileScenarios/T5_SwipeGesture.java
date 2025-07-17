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

public class T5_SwipeGesture {
  @Test
  public void testSwipe()
  {
	  
	  //create appium driver session
	  
	  AppiumDriver driver=DriverSession.initDriverSession();
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //gallery
	  driver.findElement(AppiumBy.accessibilityId("Gallery")).click();
	  
	  
	  //photos
	  driver.findElement(AppiumBy.accessibilityId("1. Photos")).click();
	  
	  
	  //area
	  WebElement pageArea=driver.findElement(AppiumBy.id("io.appium.android.apis:id/gallery"));
	  
	  	  
	  
	  //gesture
	  
	  MobileElementUtil.swipeLeft(driver,pageArea,1);
//	  driver.executeScript("mobile:swipeGesture",ImmutableMap.of(
//			  
//			  "elementId",((RemoteWebElement)pageArea).getId(),
//			  "direction","left",
//			  "percent",1.0
//			  ));
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
