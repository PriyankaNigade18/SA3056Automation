
//synchronous: one process at a time

import { log } from "node:console";

// console.log("Program started......");

// for(let i=1;i<=10;i++)
// {
//     console.log("Hello");
    
// }

// console.log("Program ends.....");

//asynchronous :At a time/ parallel

// console.log("Program starts.....");

// setTimeout(()=>{
// console.log("I am Calling from timeout()......");},3000)

// console.log("Program ends.....");
//real timescenario
// let test=async function()
// {
//     let response=await fetch("https://api.restful-api.dev/objects/7");

//     console.log(response);
// }


// //call test()
// test();


//new Promise: 
console.log("Start......");

function makePizza()
{
    return new Promise((resolve)=>{

        setTimeout(()=>resolve("Pizza is ready after 4sec...."),4000);
    })
}
//function for oder
async function placeOrder()
{
    console.log("First order Pizza......");

    let res=await makePizza();
    console.log(res);
    
}
placeOrder();

console.log("ends......");











