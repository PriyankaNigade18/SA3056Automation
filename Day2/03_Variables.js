/*
Variable is name of storage location where we can store the value

In javascript 3 keywords are available to declare variable
1.var(older not recommnded in modern js)
----------------------------------
Scope: Global and Functional
Redeclaration of Var is allowed
var type data is hoisted

========Modern js==================
let and const not hoisted

2.let
------------------------
Scope: Global and Block scope
let is mutable
Redeclaration is not allowed


3.const
----------------------
Scope: Global and Block scope
const is immutable(like final keyword in java)
Redeclaration is not allowed

what is block scope:applicable for let and const type 
ex: if block, for loop,else block
{
}


what is functional scope
------------------------------
When we declare variable within a function is called functional and local
*/

console.log("==============Global scope declaration================");
var firstName="Hiteshi";
let location="US";
const email="hiteshi@gmail.com";


console.log("First name is: "+firstName );
console.log("Location is: "+location);
console.log("Email id is: "+email);

function display()
{
    console.log('-----Global data from function-------');
    console.log("First name is: "+firstName );
    console.log("Location is: "+location);
    console.log("Email id is: "+email);
    
}

//call function
display();

console.log("---------------functional Scope------");
/*
Any data delcare within a function you can call it only through that function
*/

function empData()
{
    var fname="Sarang";
    let id=1234;
    const orgName="Wipro";
    console.log("------functional scope variable from function------");
    console.log("Employee name is: "+fname);
    console.log("Employee id is: "+id);
    console.log("Orangnization name is: "+orgName);
    
}


//call
empData();

console.log("------Outside that function calling data------");

//console.log("Employee name is: "+fname);//ReferenceError: fname is not defined
//console.log("Employee id is: "+id);//ReferenceError: id is not defined
//console.log("Orangnization name is: "+orgName);//ReferenceError: orgName is not defined
    
console.log("--------------block scope------------------");

if(true)
{
    let bversion=113;
    const bname="chrome";
    console.log("Browser name is: "+bname);
    console.log("Browser version is: "+bversion);
    
}
//console.log("Browser name is: "+bname);//ReferenceError: bname is not defined
//console.log("Browser version is: "+bversion);//ReferenceError: bversion is not defined

console.log("-------Redeclaration for var is allowed---------");

var tool="selenium";
console.log("Tool name is: "+tool);//selenium
var tool="Cypress";
var tool=1324;
console.log(tool);//1324


console.log("-------Redeclaration for let and const  is  not allowed---------");

let book="Functional Testing";
console.log("Book is: "+book);
//let book="API testing";//error : Cannot redeclare block-scoped variable 'book'
book="API Testing";//reassignment
console.log("Book is: "+book);

const pi=3.14;
console.log("Pi value is: "+pi);
//const pi=566;//Cannot redeclare block-scoped variable 'pi'
//reassignment is not allowed as const is immutable
//pi=56.66;//TypeError: Assignment to constant variable.

console.log("-----------------Hoisting------------------");
/*
Behaviour of Js where before declaration of variable(var) and function(function declaration)
you can able to call it


not applicable for let and const even for function expression

*/
console.log(place);//undefined

var place="Mumbai";
console.log(place);//after initilization you will get value

// console.log(env);//ReferenceError: Cannot access 'env' before initialization

// let env="Dev";

// console.log(dept);//ReferenceError: dept is not defined

// const dept="computer";


//only functiondeclartion is hoisted

print();


function print()
{
    console.log("Hello All");
        
}


//test();//ReferenceError: Cannot access 'test' before initialization
let test=function()
{
    console.log("This is function expression");
    
}



















