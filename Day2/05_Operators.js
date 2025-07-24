/*
1.Arithmetic: +,-,*,/,%  Increment and decrement operator

2.Relational:<,<=,>,>=,!=
    Equality check
    ===================
    == loose equality
    === stirct equality


3.Logical: && ,||,!

*/

let num1=100,num2=20;
console.log(num1+num2);//120

console.log("Addition is: "+num1+num2);//10020
console.log("Addition is: "+(num1+num2));
console.log("Subtraction is: "+(num1-num2));
console.log("Multiplication is: "+(num1*num2));
console.log("Division is: "+(num1/num2));//
console.log("Modulus is: "+(num1%num2));//

/*
Increment ++      decrement --
postIncrement
------------------ 
num1++
num1=100;
num1+1=num1;
num1=101

preIncrement
-------------
++num1

*/

let a=100;
console.log(a);//100
console.log(a++);//100 post operator: not perform operations immeditely
console.log(a);//101

let b=200;
console.log(b);//200
console.log(++b);//201


//decrement -- num1-- =num1=num1-1

let c=90;
console.log(c);//90
console.log(c--);//90
console.log(c);//89

let d=77;
console.log(d);//77
console.log(--d);//76

console.log("------------------");

let e=89;
let f=e--;
console.log(e);//88
console.log(f);//89

let k=680;
let l=k++;
console.log(k);//681
console.log(l);//680

let p=458;
let q=++p;
console.log(p);//459
console.log(q);//459


let i=56;
let j=--i;
console.log(i);//55
console.log(j);//55

//Interview questions
console.log(90/0);//Infinity
console.log(-90/0);//-Infinity
console.log("Hello"/0);//NaN : not a number
console.log(undefined/0);//NaN
console.log(0/0);//NaN

console.log("-----------------isNaN()---------------------");
/*
isNaN(): data is not an numnber
*/
let fname="Jay";
console.log(isNaN(fname));//true

let num=100;
console.log(isNaN(num));//false

console.log("--------------Relational Operators---------------");
/*
a=101,b=201,i=j=55 e=88,f=89
< <= > >= ==(loose equality) ===(strict equality) !=
*/


console.log("less than operator <: "+(a<b));//true
console.log("less than equal to <=: "+(i<=j));//true
console.log("greater than >: "+(b>f));//true
console.log("greater than equal to >=: "+(e>=j));//true
console.log(f>=a);//false
console.log(b<=i);//false
console.log(a!=b);//true
console.log(i!=f);//true
console.log(i!=j);//false

console.log("---------------Equality == and === --------------");

/*
== loose equality 
------------------
will convert the type of data and compare the value

=== strict equality
--------------------
without conversion as it is compare data
*/


console.log(10 == "10");//true
console.log(null == undefined);//true

//strict quality ===
console.log(10 === "10");//false
console.log(null === undefined);//false

console.log("---------Logical Operators----------------");
/*
    c1      c2      and(&&)     or(||)      Not(!)c1
    true    true    true        true
    true    false   false       true
    false   true    false       true
    false   false   false       false

*/

console.log("----&&----");

console.log((a<b) && (b>f));//true
console.log((a<b) && (i!=j));//false
console.log((a===b) && (a<b));//false
console.log((i!=j) && (a>b));//false


console.log("----||----");

console.log((a<b) || (b>f));//true
console.log((a<b) || (i!=j));//true
console.log((a===b) || (a<b));//true
console.log((i!=j) || (a>b));//false

console.log("----!NOT----");
console.log(a<b);//true
console.log(!(a<b));//false

console.log("--------------------");

console.log(true+true);//2
console.log(""+100);//100
console.log(" "+100);// 100
console.log(0/0);//NAN
console.log(undefined/0);//NaN
console.log(false+1);//1
console.log(false+false);//0

































































