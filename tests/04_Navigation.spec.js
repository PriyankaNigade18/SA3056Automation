/*
Navigation commands in Pl
--------------------
page.goto(url)
page.goBack()
page.goForward()
page.refresh()
*/

import {test,expect} from "@playwright/test";

test("Test for Application Navigation",async({page})=>{

//open application
await page.goto("https://www.google.com");

console.log("application title is: "+await page.title());


//wait 
await page.waitForTimeout(1000);

//google--->facebook
await page.goto("https://www.facebook.com");

console.log("application title is: "+await page.title());

//back(facebook--->google):goBack()
await page.goBack();

//forward(google to facebook): goForward()
await page.goForward();

await page.waitForTimeout(1000);

//refresh page: page.reload()
await page.reload();

//wait 
await page.waitForTimeout(1500);



})





