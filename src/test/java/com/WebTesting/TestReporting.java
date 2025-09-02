package com.WebTesting;

import org.testng.Assert;
import org.testng.annotations.Test;

public class TestReporting {
  @Test
  public void testCase1_RegisterProcess()
  {
	  Assert.assertEquals(true,true,"Assertion Fail");
	  System.out.println("Assertion is pass!");
  }
  
  @Test
  public void testCase2_LoginProcess()
  {
	  Assert.assertEquals(true,false,"Assertion Fail!");
	  System.out.println("Assertion is pass!");
  }
}
