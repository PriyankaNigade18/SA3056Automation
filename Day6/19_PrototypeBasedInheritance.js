/*
To add new properties to Object we use prototype


*/

function Employee(id,fname)
{
this.id=id;
this.fname=fname;

}

//to create new property language for all the Employee use prototype
Employee.prototype.language="Javascript";

//object
const e1=new Employee(101,"Sara");
//e1.language="Javascript";
console.log("Employee id is: "+e1.id+": Employee name is: "+e1.fname+": Employee specilization: "+e1.language);

console.log("--------------------");

const e2=new Employee(201,"Kiran");
console.log("Employee id is: "+e2.id+": Employee name is: "+e2.fname+": Employee specilization: "+e2.language);

console.log("---------------------");


let s1="Testing        ";
console.log("Length is: "+s1.length);//15
console.log("To get only characters length:"+s1.trim().length);//truelength 7

console.log("-----using prototype-----");

String.prototype.trueLength=function(s)
                {
                        return s.trim().length;
                }

console.log(s1.trueLength(s1));

let s2="Data     ";
console.log(s2.trueLength(s2));//4

