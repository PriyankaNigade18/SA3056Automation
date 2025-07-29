/*

Array
------------
Its is static data structure
It is collection of similar type of data and Object
Array is having fixed size of data/object

Two types
-------------
1.Single dimension array(1D)
2.Multi dimension array(2D)


Ways to declare array
-------------------------
literal way of declaration

Syntax:
=============

let arrayName=[data1,data2,data3];

Array itself Object in Javscript
*/

let a=[];
console.log(typeof(a));//Object
console.log(a);


//number array
let num=[10,20,30,40,50];
console.log(num);

//data from specific index
console.log(num[2]);//30

//data for wrong index
console.log(num[9]);//undefined

//get the size of array : length property
console.log("Total elements from array: "+num.length);//5

/*
Iteration for array
----------------------
1.using simple for loop
2.using for of loop

for...of loop iterates over the values(Array/string)
for...in loop iterates over keys and index(Object)
*/

console.log("------Iteration using simple for loop------");

for(let i=0;i<num.length;i++)//index
{
    console.log(num[i]);
    
}

console.log("------Iteration using for...of loop------");

for(let i of num)
{
    console.log(i);
    
}

console.log("--------------------");

//for...in loop applicable for object not for array
//for...in loop iterates over keys or index
for(let i in num)
{
    console.log(i);

    
}

console.log("--------------------");

//for...in loop applicable for object not for array
//for...in loop iterates over keys or index
for(let i in num)
{
    console.log("for index: "+i+" value is: "+num[i]);

    
}

console.log("----------array Methods-------------");

let color=["red","pink","blue","orange"];
console.log("total colors: "+color.length);//4
console.log(color);//[ 'red', 'pink', 'blue', 'orange' ]

//push():Appends new elements to the end of an array
color.push("black");
console.log(color);//[ 'red', 'pink', 'blue', 'orange', 'black' ]
console.log("total colors: "+color.length);//5

//unshift():Inserts new elements at the start of an array
color.unshift("white");
console.log(color);//[ 'white', 'red', 'pink', 'blue', 'orange', 'black' ]
console.log("total colors: "+color.length);//6

//pop():Removes the last element from an array and returns it.
let lastColor=color.pop();
console.log("deleted color: "+lastColor);
console.log(color);//[ 'white', 'red', 'pink', 'blue', 'orange']
console.log("total colors: "+color.length);//5

//shift():Removes the first element from an array and returns it.
let firstColor=color.shift();
console.log("deleted color: "+firstColor);
console.log(color);//[  'red', 'pink', 'blue', 'orange']
console.log("total colors: "+color.length);//4

console.log("--------------------------------------");

let empName=["Ravi","Teja","Kiran","Geeta","Sumit"];
            // 0      1      2       3       4

//splice():Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//syntax: splice(startindex,totaldelete count,replacevalue);
console.log(empName);

let deletedEmp=empName.splice(1,1);
console.log("deleted employee name: "+deletedEmp);
console.log(empName);

empName.push("Amit","Kiran","Ravi");
console.log(empName);//["Ravi","Kiran","Geeta","Sumit","Amit","Kiran","Ravi"]
console.log("Total Employee:"+empName.length);//7

let emp1=empName.splice(1,1,"Parag");//delete kiran and replace with parag
console.log("deleted employee: "+emp1);

console.log(empName);//["Ravi","Parag","Geeta","Sumit","Amit","Kiran","Ravi"]

console.log("Total Employee:"+empName.length);//7

empName.splice(2,3);//start with index 2 and delete 3 element

console.log(empName);//[ 'Ravi', 'Parag', 'Kiran', 'Ravi' ]
                    //      0       1       2          3

                    empName.splice(3,1);
                    console.log(empName);
                    

console.log("----------------------Array method with call back------");

let arr=[1,2,3,4,5,6,7,8,9,10];

//forEach():ieration
console.log(arr);
console.log("-----foreach()------");

//print tale of 2
//foreach():Performs the specified action for each element in an array.
arr.forEach((num)=>{//num is variable for array elements

    console.log(num*2);
    
})

console.log("-----filter()----");

//filter():iterates over values of array and perform some opertaion
//Returns the elements of an array that meet the condition specified in a callback function.
//scenario: print those numbers are greater than 5
arr.filter((num)=>{

    if(num>5)
    {
        console.log(num);
        
    }


})

console.log("----------");

//scenario: print only odd number

arr.filter((num)=>{

    if(num%2!=0)
    {
        console.log(num);
        
    }
})
console.log("------map(): even-----");


//map():iterates over values of array and perform sum opertaion
//Calls a defined callback function on each element of an array, and returns an array that contains the results.
//print even number

arr.map((num)=>{
if(num%2==0)
{
    console.log(num);
    
}
})

//sum of elements of array


let sum=0;
arr.forEach((num)=>{
sum=sum+num;
})

console.log("sum of elements of array: "+sum);

console.log("----------------------Multi D array--------------");

let loginData=[["username","password"],
                ["Teja","test123"],
                    ["Abhi","test1234"]];

console.log(loginData);
console.log(loginData[1]);
console.log("------------------");


for(let data of loginData)
{
    console.log(data);
    
}



















