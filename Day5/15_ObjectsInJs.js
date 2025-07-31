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

console.log("--------Way2: Class level object----------");

class Color
{
  
    constructor(colorName)
    {
        //cname is global data
    this.cname=colorName;
    }

    display()
    {
        console.log("Color choice is: "+this.cname);
        
    }
}

//object 
const c1=new Color("Red");
c1.display();

const c2=new Color("Blue");
c2.display();

console.log("-------Way3:Constructor Function-----------------");

/*
create constructor function with function keyword
name for constructor function starts with capital letter
without class we are able create object using constructor function


*/

function Employee(id,fname)
{
    //global data
    this.id=id;
    this.fname=fname;

    //global method
    this.display=()=>
    {
        console.log("Employee id is: "+this.id);
        console.log("Employee name is: "+this.fname);
        
        
    }

}
//object
const e1=new Employee(101,"Kiran");
e1.display();

const e2=new Employee(201,"Aviraj");
e2.display();

console.log("-----Way4: prototype based Object.create()------");
//literal object or prototype
let student={
    "sid":101,
    "sname":"Jay",
    "marks":78
}

//object.create() is applicable to only prototype of literal object
console.log("Student id is: "+student.sid);
//Creates an object that has the specified prototype or that has null prototype.
const s1=Object.create(student);
console.log("Student id is: "+s1.sid);
console.log("Student name is: "+s1.sname);
console.log("Student marks is: "+s1.marks);










































