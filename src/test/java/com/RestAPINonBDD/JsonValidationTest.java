package com.RestAPINonBDD;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class JsonValidationTest
{
  @Test(priority=1)
  public void testJsonBody() {
	  
	  Response res=RestAssured.get("https://reqres.in/api/users/2");
	  
	  System.out.println(res.asPrettyString());
	  
	  //validate id should be 2
	  
	  //step1: get the json response
	 int id= res.jsonPath().getInt("data.id");
	 
	 Assert.assertTrue(id==2);
	 System.out.println("Id matched!");
	  
	 //validate for email should have @reqres.in
	 String email=res.jsonPath().getString("data.email");
	 
	 Assert.assertTrue(email.contains("@reqres.in"),"Email not matched!");
	 System.out.println("Email matched.....Test pass");
	 
	 //validate firstname
	 String fname=res.jsonPath().getString("data.first_name");
	 Assert.assertEquals(fname,"Janet");
	 System.out.println("First name matched!");
	 
 
  }
  
  @Test
  public void testListOfUsers()
  {
	  
	  Response res=RestAssured.get("https://reqres.in/api/users?page=2");
	  
	  //log the response 
	  res.then().log().body();
	  
	  //res.then().log().headers();
	  
	  //res.then().log().all();
	  
	  //scenario:   "total": 12
	  int value=res.jsonPath().getInt("total");
	  Assert.assertEquals(value,12);
	  System.out.println("Total value is matched!");
	  
	  //array id should be 8 at 2nd position
	  int id=res.jsonPath().getInt("data[1].id");
	  Assert.assertEquals(id,8);
	  System.out.println("Id matched!");
	  
	  //list scenarion get all ids
	  List<Integer> allId=res.jsonPath().getList("data.id");
	  System.out.println("Total ids are: "+allId.size());//6
	  
	  System.out.println("------All Ids-----");
	  for(Integer i:allId)
	  {
		  System.out.println(i);
	  }
	  
	  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
