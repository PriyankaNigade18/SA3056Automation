/*
Group of statements we can run using function

1.Function declaration(older)
2.Function Expression(letest)
    2.1. Anonymous function (function without name)
    2.2. Arrow function

*/

//1.function declaration
function greet()
{
    console.log("Hello all, welcome to learn Functions in Js");
    
}

//call function to see result
greet();


console.log("-----------------------------");

//2. Anonymous function

let show=function()
    {
        console.log("This is Anonymous function calling.....");
        
    }

//call
show();

console.log("-----------------------------");

//3.Arrow function

let data=()=>{console.log("This is arrow function is calling!");}

//call
data();



