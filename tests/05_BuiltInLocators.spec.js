/*
https://playwright.dev/docs/locators#locate-by-role
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/


import {test,expect} from "@playwright/test";


test("Test BuiltIn locators for CRM app",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/");

//sign in by role
await page.getByRole("link",{name:"Sign In"}).click();

//login page :enter email by placeholder
await page.getByPlaceholder("Enter email").fill("test@gmail.com");

//enter password
await page.getByPlaceholder("Password").fill("test123");

//checkbox by label: check() uncheck()
await page.getByLabel("Remember me").check();

/*print the text of the element
1.identify element by its visible text using locator: getByText()
2.to get the text of any element use textContent()
*/

let text=await page.getByText("Login").textContent();
console.log("Form text is: "+text);

//button by role
await page.getByRole("button",{name:"Submit"}).click();

//wait
await page.waitForTimeout(1500);



})



