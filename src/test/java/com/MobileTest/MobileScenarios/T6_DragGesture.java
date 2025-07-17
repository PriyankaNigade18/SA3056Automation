package com.MobileTest.MobileScenarios;

import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.MobileTest.Utility.DriverSession;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T6_DragGesture {
  @Test
  public void testDragGesture() 
  {
	  //create appium driver session
	  AppiumDriver driver=DriverSession.initDriverSession();
	  
	  //views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //drag and drop
	  driver.findElement(AppiumBy.accessibilityId("Drag and Drop")).click();
	  
	  //dot1
	  WebElement ele=driver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_dot_1"));
	  
	  //gesture
	  driver.executeScript("mobile:dragGesture",ImmutableMap.of(
			  "elementId", ((RemoteWebElement)ele).getId(),
			  "endX",408,
			  "endY",1657
			   ));
	  
	  
	  //assertion
	  String actText=driver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_result_text")).getText();
	  String expText="Dropped!";
	  AssertJUnit.assertEquals(actText,expText);
	  System.out.println("Drag Gesture is completed with text: "+actText);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
