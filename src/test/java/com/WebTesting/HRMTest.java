package com.WebTesting;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class HRMTest {
  @Test(dataProvider = "exceldata",dataProviderClass = Data.class)
  public void testLogin(String un,String psw) throws InterruptedException 
  {
	  WebDriver driver=new ChromeDriver();
		 
	  driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
	  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
	 
	  
	  driver.findElement(By.name("username")).sendKeys(un);
	  driver.findElement(By.name("password")).sendKeys(psw);
	  driver.findElement(By.xpath("//button[@type='submit']")).click();
	  Thread.sleep(2000);
	  //assertion
	  Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"),"Login Fail!");
	  System.out.println("Login successfull!");
  }
}
