
import {test,expect} from "@playwright/test";

test("Test for Screenshot",async({page})=>{

await page.goto("https://www.amazon.in");

await page.screenshot({path:"tests//Screenshots//Amzon.png"});

await page.screenshot({path:"tests//Screenshots//Fullpage.png",fullPage: true});

})