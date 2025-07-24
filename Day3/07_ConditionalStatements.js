
//Simple if() : true condition


console.log("------Simple If---------");

//validate current year
console.log("-----true condition-----");

let year=2025;

if(year === 2025)
{
    console.log("Year matched!...Its 2025");
    
}
console.log("-----false condition-----");

if(year === 2026)//false
{
    console.log("Year matched!...Its 2026");
}

console.log("------ If-else ---------");
//age validation for voting

let age=10;

if(age >= 18)
{
    console.log("Valid age");
    
}else
    {
    console.log("Invalid age");
    
}

console.log("------ Ladder if:Multiple condition testing ---------");

//test for number and check is it +ve -ve or 0

let num=0;

if(num>0)
{
    console.log(num+" is Positive number");
    
}else if(num<0)
{
    console.log(num+" is Negative number");
}else 
{
    console.log(num+" is Zero");
}

console.log("----Nested if------");
/*
 validate marks and provide grade
 1.marks are greater than and equal to 90=A
2.marks are greater than and equal to 95=A++
3.Otherwise grade B

*/

let marks=96;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
        
    }else{
        console.log("A");
        
    }
}else{
    console.log("B");
    
}

console.log("------Switch case-------");
//traffic signal
/*
break statement is applicable to Switch case and loop
break means it will exit from swicth case and loop

*/
let color="black"

switch (color) {
    case "red":
        console.log("STOP");
            break;

     case "amber":
        console.log("READY");
            break;

    case "green":
        console.log("GO");
            break;

        default:
       console.log("Wrong color!");
       
}

console.log("-----------------");
console.log("-----------------");
console.log("-----------------");
console.log("-----------Real time scenario------------");

let bname="Chrome";

switch(bname.toLowerCase())
{
    case "chrome":
        console.log("Test case is executing on "+bname);
        break;
     case "firefox":
        console.log("Test case is executing on "+bname);
        break;
     case "edge":
        console.log("Test case is executing on "+bname);
        break;
        default:
            console.log("please write valid browser name!");
            
        
}























