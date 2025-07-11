package com.RestAPINonBDD;

import java.util.concurrent.TimeUnit;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class FirstAPITest {
  @Test
  public void testGETSingleUser()
  {
	  /*
	   * RestAssured is class and Response is an interface
	   */
	  
	  //send the request
	  Response res=RestAssured.get("https://reqres.in/api/users/2");
	  
	  //get the Response
	  System.out.println("Response code is: "+res.getStatusCode());
	  System.out.println("REsponse stataus line: "+res.getStatusLine());
	  System.out.println("REsponse Time in ms: "+res.getTimeIn(TimeUnit.MILLISECONDS));
	  
	  System.out.println("REsponse in text format:RAW type");
	  System.out.println(res.asString());
	  
	  System.out.println("Response in JSON");
	  System.out.println(res.asPrettyString());
	   
	  
  }
}
