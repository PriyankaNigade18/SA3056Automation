package com.MobileTest.MobileScenarios;

import org.testng.annotations.Test;
import org.openqa.selenium.Alert;
import org.testng.annotations.Test;

import com.MobileTest.Utility.DriverSession;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T8_AlertHandling {
  @Test
  public void testAlert()
  {
	  //create driver session
	  AppiumDriver driver=DriverSession.initDriverSession();
	  
	  //app
	  driver.findElement(AppiumBy.accessibilityId("App")).click();
	  
	  
	  //alerts
	  driver.findElement(AppiumBy.accessibilityId("Alert Dialogs")).click();
	  
	  
	  //open alert1
	  driver.findElement(AppiumBy.accessibilityId("OK Cancel dialog with a message")).click();
	  
	  //alert will open
	  
	  Alert alt1=driver.switchTo().alert();
	  System.out.println("Alert1 text is: "+alt1.getText());
	  //ok
	  alt1.accept();
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
