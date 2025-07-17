package com.MobileTest.MobileScenarios;

import org.testng.annotations.Test;
import org.openqa.selenium.ScreenOrientation;
import org.testng.annotations.Test;

import com.MobileTest.Utility.DriverSession;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T13_LockUnlockRotateDevice {
  @Test
  public void testDeviceFeatures() throws InterruptedException 
  {
	  //create driver session
	  AppiumDriver driver=DriverSession.initDriverSession();
	  
	  //lock device
	  ((AndroidDriver)driver).lockDevice();
	  
	  Thread.sleep(2000);
	  
	  //unlock device
	  
	  ((AndroidDriver)driver).unlockDevice();
	  
	  //rotate
	  
	  ((AndroidDriver)driver).rotate(ScreenOrientation.LANDSCAPE);
	  Thread.sleep(2000);
	  
	  ((AndroidDriver)driver).rotate(ScreenOrientation.PORTRAIT);
	  
	  
  }
}
