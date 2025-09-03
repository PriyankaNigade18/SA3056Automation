package com.WebTesting;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.BeforeClass;

import com.Utility.BrowserProvider;

public class BaseClass
{
public WebDriver driver;

@BeforeClass
public void setUp()
{
	driver=BrowserProvider.setDriver("chrome");
	driver.get("https://www.google.com");
	
}
}
