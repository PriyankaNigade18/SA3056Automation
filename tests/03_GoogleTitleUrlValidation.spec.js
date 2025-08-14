
//import playwright library
import {test,expect} from "@playwright/test";
/*
Playwright support Hard assertion and soft assertion
using expect()
*/

test("Test for google title and url validation",async({page})=>{

    //open application: goto()
    await page.goto("https://www.google.com/");

    //to get the current page title: title()
    let appTitle=await page.title();
    console.log("Application title is: "+appTitle);

    //to get current url: url()
    let appUrl=await page.url();
    console.log("Application url is: "+appUrl);
    
    //assertions with variable
    await expect(appTitle).toEqual("Google");//exact match

    //url assertion
    await expect(appUrl).toEqual("https://www.google.com/")//exact url match

    //partial match: /partail text/
    await expect(appUrl).toContain("https");//right syntax for toContain()

    //assertions on page
    await expect(page).toHaveTitle("Google");//exact match
    await expect(page).toHaveURL("https://www.google.com/");//exact match
    
     //partial match: /partail text/
    //await expect(page).toHaveURL("https");//partial:Error: Timed out 5000ms waiting for expect(page).toHaveURL(expected)
    
     await expect(page).toHaveURL(/https/);


    
})