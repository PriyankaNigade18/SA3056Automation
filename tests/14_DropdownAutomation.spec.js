
import {test,expect} from "@playwright/test";

test("Test for select tag based dropdown",async({page})=>{

//open application
await page.goto("https://www.amazon.in/");

//visible text
let ddEle=await page.locator("#searchDropdownBox");
ddEle.selectOption("Apps & Games");

await page.waitForTimeout(1500);

//label
ddEle.selectOption({label:"Software"});

await page.waitForTimeout(1500);

//value
ddEle.selectOption({value:"search-alias=videogames"});

await page.waitForTimeout(1500);
//index
ddEle.selectOption({index:3});




await page.waitForTimeout(2000);



})
