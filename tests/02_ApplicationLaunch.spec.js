
//import playwright library
import {test} from "@playwright/test";
/*
Fixture: Is environment for playwright test
---------------------
1.Page: Independent test/application
2.Browser:Its used for window handling
3.Request: Used in API test
4.Browser-contex: To customized current browser session

*/

test("Test for Google application Launch",async({page})=>{

    //open google application
   await page.goto("https://www.google.com");


   //pause the execution: Thread.sleep
   await page.waitForTimeout(3000);
})

