
import{test,expect} from "@playwright/test";

test.describe("Test suite1...",()=>{

//tc1
test("test case1",async ({page})=>{

    console.log("Test case 1......");
    
})


//tc1
test("test case2",async ({page})=>{

    console.log("Test case 2......");
    
})

})


test.describe.only("Test Suite 2",()=>{

test("This is test 111",async({page})=>{
    console.log("This is test111 from suite2.....");
    
})

})