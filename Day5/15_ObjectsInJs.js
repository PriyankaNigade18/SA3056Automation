/*

Object is any real word entity which has state and behaviour

Object is instance of class

In Js everything is represented as Object

4 Ways to create object
========================
1.using literal(constant)
2.using new keyword(class object)
3.Using constructor function
4.Using prototype/literal


*/

console.log("-----Object using literals-------");

let person={
    "id":101,
    "name":"Sarang",
    "job":"QA"
}

console.log(person);
console.log(typeof(person));//object

//how to get any specific entry from object (.)
//objectname.key return value
console.log("Current job is: "+person.job);

console.log("Person name is: "+person.name);

console.log("------Number of Keys--------");

//itearate Object and return all keys 
//for in loop
for(let i in person)
{
    console.log(i);
    
}

console.log("---------------");

//iterate for key =value

for(let i in person)
{
    console.log("for Key: "+i+" value is: "+person[i]);
    
}



















