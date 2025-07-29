/*
Call back function/Higher order function
 ----------------------------------------
 Whenever we pass function as argument/parameter to any other
  function then that function called call back function or higher order function

Purpose: To handle Asynchronous operation and reusability 


*/

//executable function
function greet(name,fun)//fun is call back function
{
    //call to call back function
    fun(name);
}

//call back function
function display(username)
{
console.log("Hello "+username+" Welcome to learn call back function....");

}

//call
greet("Sana",display);

console.log("----------------------------------");

function add(a,b)
{
console.log("Addition is: "+(a+b));

}

function sub(a,b)
{
console.log("subtarction is: "+(a-b));

}

function mul(a,b)
{
console.log("Multiplication is: "+(a*b));

}
function div(a,b)
{
console.log("Division is: "+(a/b));

}

function sub2(a,b,c)
{
 //console.log(a-b-c);
 return a-b-c;
 
}

//executable(Business logic)
function cal3digit(a,b,c,fun)
{
//fun(a,b,c);
let res=fun(a,b,c);
console.log("Result of return:"+res);

}

function calculate(n1,n2,fun)
{
fun(n1,n2);
}

//call
calculate(100,400,add);//add is call back function
calculate(67,88,mul);
calculate(100,30,sub);

//3 digit
cal3digit(100,20,10,sub2);








