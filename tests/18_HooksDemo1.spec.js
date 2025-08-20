
import {test,expect} from "@playwright/test";

//hooks
test.beforeAll(()=>{
    console.log("BeforeAll executes one time beforeall the test cases.....");
    
})

test.afterAll(()=>{
    console.log("AfterAll executes after all the test cases one time.....");
    
})

test.beforeEach(()=>{
    console.log("BeforeEach executes beforeevery test case.....");
    
})

test.afterEach(()=>{
    console.log("AfterEach executes after every test case......");
    
})


test("This is test1",async({page})=>{
console.log("This is testcase 1 executing.....");

})



test("This is test2",async({page})=>{
console.log("This is testcase 2 executing.....");

})


test("This is test3",async({page})=>{
console.log("This is testcase 3 executing.....");

})