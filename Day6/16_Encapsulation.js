/*
What is Encapsulation:
------------------------
Wrapping data and function together in one single unit is called Encapsulation

Purpose: Data hiding or data security

Real time Example:capsule, class,login mechanism

How to implement in js
----------------------
Using scope we can hide the data from outsider
Using getters and setters we can provide access to hidden data



*/


class Emp
{
    constructor()
    {
        //private data/local :scope
        let id;
        let fname;

    }

    //getters and setters
    setId(id)
    {
    this.id=id;
    }
    setFname(fname)
    {
    this.fname=fname;
    }

    getId()
    {
        return this.id;

    }
    getFname()
    {
        return this.fname;
    }
    //business logic
display()
{
    console.log("Employee id is: "+this.getId()+" : "+"Employee name is: "+this.getFname());
    
}


}

//object
const e1=new Emp();
e1.setId(201);
e1.setFname("Anu");
e1.display();

console.log("---------------");

const e2=new Emp();
e2.setId(301);
e2.setFname("Sarita");
e2.display();









