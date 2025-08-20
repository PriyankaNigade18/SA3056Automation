
import {test,expect} from "@playwright/test";

test("Test Autosuggestion/bootstrap dropdown",async({page})=>{

    //open application
    await page.goto("https://www.redbus.in/");

    await page.locator("//div[text()='From']").click();

    await page.locator("#srcDest").fill("Pune");

    await page.waitForTimeout(1500);
    let allOptions=await page.locator("//div//div[contains(@class,'listItem')]//div[contains(@class,'listHeader')]").all();
    console.log("Total options are: "+allOptions.length);

    let exp="Wakad";

    for(let i of allOptions)
    {
        console.log(await i.innerText());
        let text=await i.innerText();
        if(text.includes(exp))
        {
            i.click();
            break;
        }

        
    }

    

    await page.waitForTimeout(2000);

})

