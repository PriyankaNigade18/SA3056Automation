package com.MobileTest.MobileScenarios;

import org.testng.annotations.Test;
import java.time.Duration;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileTest.Utility.DriverSession;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T11_NotificationsTest {
  @Test
  public void testNotifications() 
  {
	  //create driver session
	  AppiumDriver driver=DriverSession.initDriverSession();
	  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	  
	  //open Notifications
	  ((AndroidDriver)driver).openNotifications();
	  
	  
	  //get the count
	  List<WebElement> allNotifications=driver.findElements(AppiumBy.id("android:id/app_name_text"));
	  System.out.println("Total Notifications are: "+allNotifications.size());
	  
	  for(WebElement i:allNotifications)
	  {
		  System.out.println(i.getText());
	  }
	  
	  
	  //expand AppiumSetting arrow
	  driver.findElement(AppiumBy.xpath("(//android.widget.Button[@content-desc=\"Expand\"])[1]")).click();
	   
	  List<WebElement> titles=driver.findElements(AppiumBy.id("android:id/title"));
	  
	  for(WebElement i:titles)
	  {
		  System.out.println(i.getText());
	  }
		  
	  
	  
	  
	  
	  
	  
	  
  }
}
