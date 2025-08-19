/*
Playwright Locators
--------------------
To identify elements we need Locator
Locator is address of webelement from that web page

Playwright default locator strategy is BuiltInLocators
We can use Xpath,cssSelector all basic locators from selenium

To work with any basic locator strategy then use locator()

xpath
===========
path of webelement form xml/html page

types
=========
1.Absolute xpath
---------------------
-always starts with root node
-starts with '/'

2.Relative xpath
-------------------
-here we can identify element based on relative property
-starts with '//'

Syntax:
-----------
//tagname[@attribute='value']

Methods in Xpath
==============
1.text(): applicable for visible text without space
-------------
Syntax:
-------------
//tagname[text()='Mobiles']

2.normalize-space(): act like trime()applicable for visible text with space
Syntax:
-------------
//tagname[normalize-space()='Mobiles']

3.contains():applicable for partial match
---------------------------------------
Syntax:
-------------
//tagname[contains(@attribute,'value')

4.starts-with():Based on Prefix value we can identify element
--------------------
Syntax:
-------------
//tagname[starts-with(@attribute,'prefixvalue')

//xpath-axies
------------------
parent,child,ancestor,following,preceding,following-sibling,preceding-sibling

CssSelector
============
1.tagname with id
---------------------
tagname#id

2.tagname with classname
---------------------------
tagname.classname

3.tagname with attribute
----------------------------
tagname[attribute='value']

*/


import {test,expect} from "@playwright/test";

test("Test for Google search with valid keyword",async({page})=>{

    //open application
    await page.goto("https://www.google.com");

    //search for cypress keyword using xpath
    await page.locator("//textarea[@id='APjFqb']").fill("cypress");

    //clear search keyword using cssselector
    await page.locator("#APjFqb").clear();

    //search for java with xpath
   // await page.locator("//textarea[@aria-label='Search']").fill("Java");
   // await page.fill("//textarea[@aria-label='Search']","Java");

   let searchEle=await page.locator("//textarea[@aria-label='Search']");
   searchEle.fill("Testing");
   searchEle.click();

    //wait
    await page.waitForTimeout(1500);

})

test("Test for Login functionality for SwagLab",async({page})=>{

    //open application
await page.goto("https://www.saucedemo.com/v1/");
//username
await page.getByPlaceholder("Username").fill("standard_user");
//password
await page.locator("#password").fill("secret_sauce");
//login button
await page.locator("//input[@value='LOGIN']").click();

//assertion on next page url
await expect(page).toHaveURL(/inventory/);
console.log("User Login Completed!");

//wait
await page.waitForTimeout(1500);



})


test.only("Test for Xpath Methods",async({page})=>{

    //open application
    await page.goto("https://www.amazon.in/");

    //click on cart option:normalize-space():Ignore white space like trim()
    await page.locator("(//span[normalize-space()='Cart'])[2]").click();

    //assertion on url
    await expect(page).toHaveURL(/nav_cart/);
    console.log("CartPage Open!");

    //open Sell page: text()
    await page.locator("//a[text()='Sell']").click();
    //assertion
    await expect(page).toHaveURL(/sell/);

    console.log("SellPage Open!");

    //contains():partial match:searchbox
    //let searchbox=await page.locator("//input[contains(@id,'searchtext')]");

    //starts-with():Prefix value
    let searchbox=await page.locator("//input[starts-with(@id,'two')]");
    searchbox.fill("bags");
    //keyboard key interaction is possible with the help of press()
    searchbox.press("Enter");
    
    await page.waitForTimeout(2000);

})




