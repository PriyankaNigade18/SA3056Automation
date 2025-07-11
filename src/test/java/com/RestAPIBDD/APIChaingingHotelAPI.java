package com.RestAPIBDD;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import com.RestAPI_POJO.AuthenticationPOJO;
import com.RestAPI_POJO.Booking;
import com.RestAPI_POJO.BookingDates;

import io.restassured.response.Response;

/*
 * given(): prerequisite
 * ----------------------
 * header,request path and query paramater,Request Payload,authorization
 * 
 * when(): REquest type+endpoint
 * -------------------------
 * GET,POST,PUT,PATCH,DELETE
 * 
 * then(): validate reponse
 * ----------------------------
 * status code,message,response time,header,cookies,payload
 */
public class APIChaingingHotelAPI 
{
	
	int bookingid;
	String tokenvalue;
	
	
  @Test(priority=1)
  public void createBooking() 
  {
	  System.out.println("First Create new Booking");
	  
	  //create request payload
	  
	  BookingDates date=new BookingDates();
	  date.setCheckin("2025-07-09");
	  date.setCheckout("2025-07-10");
	  
	  Booking booking=new Booking();
	  booking.setFirstname("Priyanka");
	  booking.setLastname("Nigade");
	  booking.setTotalprice(9999);
	  booking.setDepositpaid(true);
	  booking.setBookingdates(date);
	  booking.setAdditionalneeds("Dinner");
	  
	  
	  
	 Response res= given()
	  .header("Content-Type","application/json")
	  .body(booking)
	  
	  .when().post("https://restful-booker.herokuapp.com/booking");
	  
	 
	 //get the status code
	 System.out.println(res.getStatusCode());
	 
	 //log the response
	 res.then().log().body();
	 
	 //get the booking id
	  bookingid=res.jsonPath().getInt("bookingid");
	 System.out.println("Booking id generated: "+bookingid);
	 
	 
  }
  
  @Test (priority=2)
  public void getSameBookingDetails()
  {
	  System.out.println("Get the details for New Booking");
	  
	  Response res=given()
	  .when().get("https://restful-booker.herokuapp.com/booking/"+bookingid);
	  
	  
	  //log the response
	  res.then().log().body();
	  
  }
  
  @Test(priority=3)
  public void createToken()
  {
	  
	  AuthenticationPOJO auth=new AuthenticationPOJO();
	  auth.setUsername("admin");
	  auth.setPassword("password123");
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  .body(auth)
	  
			  .when().post("https://restful-booker.herokuapp.com/auth");
	  
	  //get the token and store it into variable
	  tokenvalue=res.jsonPath().getString("token");
	  System.out.println("Token created: "+tokenvalue);
	  
  }
  
  @Test(priority=4)
  public void fullUpdate()
  {
//create request payload
	  
	  BookingDates date=new BookingDates();
	  date.setCheckin("2025-07-09");
	  date.setCheckout("2025-07-10");
	  
	  Booking booking=new Booking();
	  booking.setFirstname("Piyu");
	  booking.setLastname("Nigade");
	  booking.setTotalprice(8888);
	  booking.setDepositpaid(true);
	  booking.setBookingdates(date);
	  booking.setAdditionalneeds("lunch");
	  
	  
	  
	 Response res= given()
	  .header("Content-Type","application/json")
	  .header("Accept","application/json")
	  .header("Cookie","token="+tokenvalue)
	  
	  .body(booking)
	  
	  .when().put("https://restful-booker.herokuapp.com/booking/"+bookingid);
	  
	 
	 //get the status code
	 System.out.println(res.getStatusCode());
	 
	 //log the response
	 res.then().log().body();
	 
	 System.out.println("Booking updaed with id: "+bookingid);
	 
	 
  }
  
  
}
