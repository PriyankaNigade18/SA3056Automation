/*
Type Casting: Is conversion of one type of data into other type

1.Implicit Casting
-----------------------
In Javascript we called it as Type Coercion
It is automatic casting means conversion is taken care by js


2.Explicit Casting
--------------------
Forcefull conversion

truthy and falsy values in js
================================
Truthy
----------
Any true value in boolean context called truthy
ex:
----
nonzero number , non empty string ,true

falsy
--------
Any false value in boolean context is called falsy value
Ex:
----
0,NaN,empty string "",undefined,false,null



*/

console.log("---------Implicit Casting--------------");
console.log("----------String-----------------");
/*
Whenever we use only +(arithmetic opertor ) with string then other data will convert
into string(coercion)
*/


let s1="Hello"+100;//100 is coerced to String
console.log(s1);//Hello100
console.log(typeof(s1));//string

let s2=10+"Hello"+20;//10 & 20 is coerced into string
console.log(s2);//10Hello20
console.log(typeof(s2));//string

console.log(100+30+"Hi");//100+30=130 then 130 coerced into string= 130Hi
console.log(typeof(100+30+"Hi"));//string

console.log(100+"Hi"+200+"All");//100Hi200All
console.log(typeof(100+"Hi"+200+"All"));//string

console.log("Hello"+100+80);//Hello10080


console.log("-----------Number-------------------");
/*
Whenever we use (arithmetic opertors -,*,/ ) with string then string will convert
into number type(coercion) only if it is compatible

 */

let s3="Hello"-100;
console.log(s3);//NaN
console.log(typeof(s3));//Number

let s4="100"-40;//"100" will coerced into number 100-40=60
console.log(s4);//60
console.log(typeof(s4));//number

console.log("80"/4);//"80" will coerced into number 80/4

console.log("100"*"100");//both "100" will coerced into 100=100*100=10000


console.log("----------Explicit Conversion-------");
/*
    string/boolean--->number= Number()
    number/boolean--->String= String()
    string/number--->boolean= Boolean()

*/

//number to string

let n1=200;
console.log(n1+100);//300
console.log(typeof(n1));//number
//conversion
let numToString=String(n1);
console.log(typeof(numToString));//string

console.log(numToString);//"200"
console.log(numToString+100);//200100


let data=true;
console.log(typeof(data));//boolean
//boolean to string
let booleanToString=String(data);
console.log(typeof(booleanToString));

//String/boolean  to number

let ss1="Hi";
console.log(Number(ss1));//NaN

let ss2="90";
console.log(typeof(ss2));//string
console.log(ss2+100);//90100

let stringToNum=Number(ss2);
console.log(typeof(stringToNum));//number
console.log(stringToNum+100);//190


console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN

console.log("--------Boolean conversion-----------");
/*
truthy and falsy values in js
================================
Truthy
----------
Any true value in boolean context called truthy
ex:
----
nonzero number , non empty string ,true

falsy
--------
Any false value in boolean context is called falsy value
Ex:
----
0,NaN,empty string "",undefined,false,null
*/
//truthy
console.log(Boolean(true));//true
console.log(Boolean(1234));//true
console.log(Boolean("Sarang"));//true
console.log(Boolean(78.77));//true
console.log(Boolean("  "));//true
console.log(Boolean(-90));//true


console.log("---------------------");

//falsy
console.log(Boolean(0));//false
console.log(Boolean(-0));//false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(false));//false


















































