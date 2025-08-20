
/*
Playwright auto dismiss alerts by clicking on OK button
-------------------------------------
For automate we need to add event page.on()

using methods we can handle different types alert
OK= accept()
cancel=dismiss()
alert text= message()
prompt=accept("prompt")
*/
import {test,expect} from "@playwright/test"

test("Test for Auto dismiss alert by pw",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

//click on  buuton
await page.locator("//button[text()='Click for JS Alert']").click();
//alert will open

//assertion
let resultText=await page.locator("#result").textContent();
await expect(resultText).toEqual("You successfully clicked an alert");

await page.waitForTimeout(2000);

})

test("Test for simple alert using event",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//before opening alert add event

await page.on("dialog",(alert1)=>{//alert1 is variable name

    console.log("Alert message is: "+alert1.message());
    //ok
    alert1.accept();
    
})


//click on  buuton
await page.locator("//button[text()='Click for JS Alert']").click();
//alert will open

//assertion
let resultText=await page.locator("#result").textContent();
await expect(resultText).toEqual("You successfully clicked an alert");

await page.waitForTimeout(2000);

})


test("Test for confirmation alert using event",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//before opening alert add event

await page.on("dialog",(alert2)=>{

    console.log("Alert message is: "+alert2.message());
    //cancel
    alert2.dismiss();
    
})

//open alert
await page.locator("//button[text()='Click for JS Confirm']").click();

//assertion
let resultText=await page.locator("#result").textContent();
await expect(resultText).toEqual("You clicked: Cancel");

await page.waitForTimeout(2000);

})

test.only("Test for prompt alert using event",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//before opening alert add event

await page.on("dialog",(alert3)=>{

    console.log("Alert message is: "+alert3.message());

    //prompt
    alert3.accept("hello");
    
})

//open alert
await page.locator("//button[text()='Click for JS Prompt']").click();

//assertion
let resultText=await page.locator("#result").textContent();
await expect(resultText).toEqual("You entered: hello");

await page.waitForTimeout(2000);
})