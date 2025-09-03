package com.WebTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import com.Utility.BrowserProvider;

public class BrowserTest extends BaseClass {
  @Test
  public void testGoogle() 
  {
//	 WebDriver driver= BrowserProvider.setDriver("edge");
//	 driver.get("https://www.google.com");
	  
	  driver.findElement(By.name("q")).sendKeys("Testng");
	  
  }
}
