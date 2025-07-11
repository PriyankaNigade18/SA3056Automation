package com.RestAPIBDD;

import static io.restassured.RestAssured.given;

import org.testng.Assert;
import org.testng.AssertJUnit;
import org.testng.annotations.Test;

import io.restassured.response.Response;

public class TestCookies_Header {
  @Test
  public void testCookies()
  {
	  Response res=given()
			  	.when().get("https://www.google.com/");
	  
	  //log only cookies
	  res.then().log().cookies();
	  
	  /*
	   * Cookies are always generated by server 
	   * Cookies are dynamic
	   * Two cookies should not have same value
	   */
	  String exp="8IeERrHPykBBGib1gDVnTFPHtDpskUNi6v-";
	  
	  String actCookie=res.getCookie("NID");
	  
	  Assert.assertFalse(actCookie.contains(exp));
	  System.out.println("Test Pass: As cookies are not same!");
	  
  }
  @Test
  public void testHeader()
  {
	  Response res=given()
			  
			  .when().get("https://www.google.com/");
			  
			  //log all headers
			  res.then().log().headers();
			  
			  //assertion
			  String exp="text/html; charset=ISO-8859-1";
			  String actHeader=res.getHeader("Content-Type");
			  
			  Assert.assertEquals(actHeader,exp);
			  System.out.println("Content type is matched....");
  }
}
