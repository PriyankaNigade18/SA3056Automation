/*

DataType: which defines type of data which we store into variable

Variable: Name of storage location where we can store data

Syntax:
------------
keyword variablename=value;

Keywrods to declare variable
-----------------------------
1.var (older)
2.let (latest): mutable 
3.const(latest) : Immutable 

In Modern Js we use let and const keyword todeclare variable

example:
--------------
let id=101;
let name="Jay";
let status=true;

Js is dynamic type language so data type is not required to declare that variable

Javascript support two types of DataTypes
--------------------------------------
1.Primitive
-------------------
1.Number
2.Boolean
3.String
4.Undefinded
5.Null
6.BigInt(NA)
7.Symbol(NA)

2.NonPrimitive
---------------
 1.Object
 2.Class
 3.Array


//typfof operator: used to get the type of data which store into variable

*/


//Number : positive integer/negative integer/floating point number

let num1=100;
console.log("Number 1 is: "+num1);
console.log("Type is: "+typeof(num1));



let num2=-100;
console.log("Number 2 is: "+num2);
console.log("Type is: "+typeof(num2));



let num3=90.78765;
console.log("Number 3 is:"+num3);
console.log("Type is: "+typeof(num3));


//boolean true/false
let isActive=true;
console.log("value for isActive: "+isActive);//true
console.log("Type of data is: "+typeof(isActive));//boolean

let isStatus=false;
console.log("value is: "+isStatus);
console.log("Type is : "+typeof(isStatus));

/*
String: collection of characters
Strings are Immutable

declaration
------------------
1.single quote 'String'
2.double quote "String"
3.template string (back tick) `String `

*/

let firstName='Jay';
console.log("first name is: "+firstName);//Jay
console.log("Type is: "+typeof(firstName));//String



let lastName="Nigade";
console.log("Last name is: "+lastName);//Nigade
console.log("Type is: "+typeof(lastName));//String



let location=`Pune`;
console.log("Location is: "+location);//Pune
console.log("Type is: "+typeof(location));//String 

/*Template String in Js 
-------------------------
for multiple line single ""syntax will not work
sowe use template string ``
 */
let info=`My name is Priyanka, I am having over 15 years of experience in IT 
and I have completed Masters in Computer and 
I am ISTQB Certified tester`;
console.log("Personal Data: "+info);
console.log("Type is: "+typeof(info));//string
//scenario for template string ``
let response=`{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
        "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
    }
}`

console.log(response);
console.log(typeof(response));


















