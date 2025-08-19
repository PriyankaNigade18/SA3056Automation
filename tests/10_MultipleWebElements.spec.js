
import {test,expect} from "@playwright/test";
import { log } from "console";

test("Automate Google search scenario with $$() JQuery method: ",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    //search for keyword: java
    
    await page.locator("#APjFqb").fill("Java");

    //wait
    await page.waitForTimeout(1500);

    let allOptions=await page.$$("(//ul[@class='G43f7e'])[1]//li");
    console.log("Total Options: "+allOptions.length);

    for(let i of allOptions)
    {
        console.log(await i.innerText());
        
    }
    


    await page.waitForTimeout(2000);



})
test("Automate Google search scenario with locator().all(): ",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    //search for keyword: java
    
    await page.locator("#APjFqb").fill("Playwright");

    //wait
    await page.waitForTimeout(1500);

    let allOptions=await page.locator("(//ul[@class='G43f7e'])[1]//li").all();
    console.log("Total Options: "+allOptions.length);

    for(let i of allOptions)
    {
        console.log(await i.innerText());
        
    }
    


    await page.waitForTimeout(2000);


})

test("Test for Google search with count()",async({page})=>{

     //open application
    await page.goto("https://www.google.com/");

    //search for keyword: java
    await page.locator("#APjFqb").fill("Playwright");

    //wait
    await page.waitForTimeout(1500);

    //multiple elements
    let allOptions=await page.locator("(//ul[@class='G43f7e'])[1]//li");

    //count()
    let totalElements=await allOptions.count();
    console.log("Total Options are: "+totalElements);//10
    
    //for loop with indexing
    for(let index=0;index<totalElements;index++)
    {
        //get the element
        let element=await allOptions.nth(index);
    console.log(await element.innerText());
    
    }



})

test.only("Test for total links validation",async({page})=>{

    //open
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(1500);
    //total links
    let allLinks=await page.locator("//a[@href]").all();
    console.log("Total links are: "+await allLinks.length);

    

    for(let i of allLinks)
    {
        console.log(await i.getAttribute("href"));
        console.log(await i.innerText());
        
    }
    
    await page.waitForTimeout(2000);
})



