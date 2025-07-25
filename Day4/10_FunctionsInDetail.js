
/*
Group of statements we can run using function

1.Function declaration(older)
2.Function Expression(letest)
    2.1. Anonymous function (function without name)
    2.2. Arrow function

 Function with parameters
 Function with return keyword
 
 Call back function/Higher order function
 ----------------------------------------
 Whenever we pass function as argument/parameter to any other function is
 called call back function or higher order function

 Parameters: parameters represent variables which hold some value

 Arguments: represent real data which pass in function while calling function


*/

console.log("------------function declaration without parameter------------------");

function test1()
{
    console.log("Hello ...Test1 is calling.....");
    
}


//call

test1();

console.log("-------function declaration with parameter---------");

function test2(id,name)//id and name are parameter
{
console.log("Test2 function is calling....");
console.log("Id is: "+id);
console.log("Name is: "+name);

}

//call
test2(101,"Sarang");//101 and sarang are arguments

console.log("-------function declaration with parameter & return keyword---------");
/*
return is keyword
------------------
to return any output/data from function we return keyword
return keyword return the result to the calling function
*/

function test3(n1,n2)
{
 return n1+n2;
}

//call
let result=test3(100,200);
console.log("addition is: "+result);

console.log("-------------Function expression without parameters----------------");

let test4=function()
            {
                console.log("Function expression test4 is calling.....");
                
            }

//call
test4();

console.log("-------------Function expression with parameters----------------");

let test5=function(info)
    {
        console.log("test5 is calling:info is:  "+info);
        
    }


//call
test5("Cypress is WebUi testing tool");
test5(1547579890);

console.log("-------------Function expression with parameters & return keyword---------------");


let test6=function(n1,n2)
    {
        return n1*n2;
    }

    //call
   let res= test6(10,10);
   console.log("Multiplication is: "+res);
   
console.log("-------------Arrow function  without parameters---------------");
//shoter syntax
let test7=()=>{console.log("Arrow function test7 is calling......");}

//call
test7();


console.log("-------------Arrow function with parameters---------------");

let test8=(role)=>{
    console.log("test8 is calling with role: "+role);
}

//call
test8("QA");

console.log("-------------Arrow function with parameters & return keyword---------------");

let test9=(info)=>{ return info;}

//call
let r=test9("Using Cypress API testing is possible");
console.log(r);




