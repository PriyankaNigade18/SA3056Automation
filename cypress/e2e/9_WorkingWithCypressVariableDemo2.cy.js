//Note: single webelement/title/url: then()


describe("Test for variable",()=>{

it("Test for title and url with variable",()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    cy.log("Url is : "+cy.url());//No

    //cypress variable
    cy.url().then((appUrl)=>{//appUrl is variable name

        if(appUrl.includes("https"))
        {
            cy.log("true.....");
        cy.log("Application url is: "+appUrl);
        }

    })


    //title
    cy.log("Application title is: "+cy.title());//not print title

    cy.title().then((appTitle)=>{

      cy.log("Application title is: "+appTitle);  
    })




})


it.only("Test for WebElement with variable",()=>{

//open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email
    //cy.get("#input-email").type("test24@gmail.com");

    //variable
    cy.get("#input-email").then(($emailEle)=>{

        cy.wrap($emailEle).click().type("test25@gmail.com");

    })


})



})