
import {test,expect} from "@playwright/test";

//browser-->context-->page(tab)
test("Test for open new tabs",async({browser})=>{

    //create new browser context
    let context1=await browser.newContext();

    //from context1 wanted to open page1=tab
    let page1=await context1.newPage();

    await page1.goto("https://www.google.com");

    //creating new tab
    let page2=await context1.newPage();
    await page2.goto("https://www.amazon.in");

await page1.waitForTimeout(2000);

})

//context-->page
test.only("Test for open new tabs with context",async({context})=>{

       //from context wanted to open page1=tab
    let page1=await context.newPage();

    await page1.goto("https://www.google.com");

    //creating new tab
    let page2=await context.newPage();
    await page2.goto("https://www.amazon.in");

await page1.waitForTimeout(2000);

})