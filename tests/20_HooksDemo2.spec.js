

import {test,expect} from "@playwright/test";

//global variable
let page;

//precodition: user should be login
test.beforeEach(async({context})=>{

    //create new page
     page=await context.newPage();

     //open application
     await page.goto("https://automationplayground.com/crm/login.html");

     await page.locator("#email-id").fill("test@gmail.com");
     await page.locator("#password").fill("test123");
     await page.locator("#submit-id").click();
})

test("Test for Adding new Customer",async({})=>{

    await page.locator("#new-customer").click();
    await expect(page).toHaveURL(/add-customer/);
})

test("Test for SignOut",async({})=>{
await page.locator("//a[text()='Sign Out']").click();

})