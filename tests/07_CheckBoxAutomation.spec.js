
import {test,expect} from "@playwright/test";

test("To validate Checkbox",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/checkboxes");

/*
check status of checkbox
//input[@type='checkbox'] 2elements
from multiple elements match to identify single element use following methods

first() last() nth(index)
*/
let checkbox1=await page.locator("//input[@type='checkbox']").first();
await expect(checkbox1).not.toBeChecked();//negative

checkbox1.check();
await expect(checkbox1).toBeChecked();//positive 

let checkbox2=await page.locator("//input[@type='checkbox']").last();
await expect(checkbox2).toBeChecked();

checkbox2.uncheck();

await page.waitForTimeout(2000);
})

test.only("Multiple checkboxes interaction",async({page})=>{

    //open
    await page.goto("https://www.letskodeit.com/practice");

    let allCheckboxes=await page.locator("//div[@id='checkbox-example-div']//label//input");//3 elements

    await allCheckboxes.first().check();
    await allCheckboxes.last().check();
    await allCheckboxes.nth(1).check();


    await page.waitForTimeout(2000);






})