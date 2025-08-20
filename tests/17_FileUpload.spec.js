import {test,expect} from "@playwright/test";

test("Test for File upload",async({page})=>{

    //open application
    await page.goto("https://the-internet.herokuapp.com/upload");

    //click and select file 
    await page.locator("#file-upload").setInputFiles("tests//TestFiles//Appiumsetup.txt");

    //click on upload
    await page.locator("#file-submit").click();

    //assertion
    let actText=await page.locator("//h3").textContent();
    await expect(actText).toEqual("File Uploaded!");
    

    await page.waitForTimeout(2000);

})