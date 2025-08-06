
/*
Data Abstraction
------------------------
Hiding implementation details about software and 
provide relevant features to the user is called data abstarction

Purpose: Information hiding

Real time example:
------------------

How to implement in Js
------------------------
using js scope/closure


*/


function Employee(id,fname,basicSalary)
{
    this.id=id;
    this.fname=fname;
    this.basicSalary=basicSalary;
    // this.bonus=10000;

    // this.calculate=()=>{
    //     let total=this.basicSalary+this.bonus;
    //     console.log("Total amount including bonus: "+total);
        
    // }

    const bonus=10000;

     let calculate=()=>{
        let total=basicSalary+bonus;
        console.log("Total amount including bonus: "+total);
        
    }

    this.display=()=>{
        console.log("Employee id is: "+this.id+" : Employee name is: "+this.fname);
        calculate();

    }

}
//Object
const e1=new Employee(101,"Jay",40000);
e1.display();

// e1.bonus=9000;
// e1.calculate();//TypeError: e1.calculate is not a function

// console.log(e1.bonus);
// e1.bonus=60000;
// e1.calculate();












