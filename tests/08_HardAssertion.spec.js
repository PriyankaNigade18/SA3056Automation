/*
Assertions help up to validate current status of application

Playwright support two types of assertion
-------------------------------------------
1.Hard Assertion:If assertion fail test will stop and AssertionError will throw
expect()
2.Soft Assertion::If assertion faile error throw but test will continue
expect().soft()
*/
import {test,expect} from "@playwright/test"

test("Test for Hard Asssertion",async({page})=>{

//open
await page.goto("https://automationplayground.com/crm/login.html");

//title
let actTitle=await page.title();
await expect(actTitle).toEqual("Customer Service - Login");//exact match
await expect(actTitle).toContain("Login");//partial

//based on page
await expect(page).toHaveTitle(/Login/);//partial

//url

await expect(page).toHaveURL("https://automationplayground.com/crm/login.html");//exact match
await expect(page).toHaveURL(/login.html/);//partial

await page.waitForTimeout(2000);

//let emailEle=await page.locator("#email-id123");//error

let emailEle=await page.locator("#email-id");

//enable
await expect(emailEle).toBeEnabled();

//visible
await expect(emailEle).toBeVisible();
//editable
await expect(emailEle).toBeEditable();

//test for value
emailEle.fill("test@gmail.com");
await expect(emailEle).toHaveValue("test@gmail.com");




})





