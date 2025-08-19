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

test("Test for Soft Asssertion",async({page})=>{

//open
await page.goto("https://automationplayground.com/crm/login.html");

//title
let actTitle=await page.title();
await expect.soft(actTitle).toEqual("Customer Service - Login");//exact match
await expect.soft(actTitle).toContain("Login");//partial

//based on page
await expect.soft(page).toHaveTitle(/Login/);//partial

//url

await expect.soft(page).toHaveURL("https://automationplayground.com/crm/login.html");//exact match
await expect.soft(page).toHaveURL(/login.html1234/);//partial

await page.waitForTimeout(2000);



let emailEle=await page.locator("#email-id");

//enable
await expect.soft(emailEle).toBeEnabled();

//visible
await expect.soft(emailEle).toBeVisible();
//editable
await expect.soft(emailEle).toBeEditable();

//test for value
emailEle.fill("test@gmail.com");
await expect.soft(emailEle).toHaveValue("test@gmail.com");




})





