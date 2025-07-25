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

//get the size of array : lenght property
console.log("Total elements from array: "+num.length);//5














