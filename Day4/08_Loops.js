/*
1.for loop:Number of iterations are known 

2.while loop:Entry control loop, Number of iterations are unknown

3.do-while loop:Exit control loop, One time iteration without matter status of condition


In Js two special loop
---------------------------
1.for of loop
----------------------
Iterates over valuye so It is applicable for array and iterable string

2.for in loop
-----------------
Iterates over a key or index, so applicable for Object



*/

console.log("--------------for loop------------------");

//print Hello statement 5 time

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("--------------------");

//print 1 to 10 number

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("--------------------");
//print 10 to 1 numbers

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("--------------------");
// for(;;)
// {
//     console.log("Hi");
    
// } infinite time this will run with Hi

//factorial scenario
//5!=5*4*3*2*1=120


let fact=1;
for(let num=5;num>=1;num--)
{
    fact=fact*num;
}

console.log("Factorial of number 5:"+fact);

console.log("------------------");
//get all even numbers upto 50

for(let i=1;i<=50;i++)
{
    if(i%2===0)
    {
        console.log(i);
        
    }
}
console.log("----------While loop--------");

let i=1;
while(i<=10)
{
    console.log("Hello");
    
    i++;
}

console.log("---------------------");

//sum of 100 natural numbers
//1+2+3+....+100=5050

let sum=0,j=1;

while(j<=100)
{
    sum=sum+j;
    j++;
}

console.log("Sum of 100 natural numbers: "+sum);

console.log("---------do while------- ");

let x=1;
do{
    console.log("Bye");
    x++;
    
}while(x==5);//condition is false: one time
















































