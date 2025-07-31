/*
Polymorphism is taking more than one form
Same thing in multiple form we can reuse

purpose: 
-------------
Reusability

Real time example
--------------------


Types:
-----------
1.Compile time polymorphism(Method Overloading)
-----------------------
Whenever same name method we declare multiple time with different
signature in same class  is callled method overloading

differnt signature
---------------
1.number arguments
2.change type of argument
3.change order of argument

2.Run time polymorphism(Method Overriding)
--------------------------------
Whenever two classes are in relation and both the class have same name method
with same signature then child class override parent class method

Rule in Js
----------------
Javascript is interpreter based laguage there is no compilation phase to compile the code
and thats the reson js will not support any method overloading concept
Overloading is not possible but overriding is possible

*/

class Test
{
    print()
    {
        console.log("Print 1 is calling.....");
        
    }

    print(id)
    {
        console.log("Print 2 is calling with id....."+id);
        
    }

    print(fname,id)
    {
    console.log("print 3 is calling with name and id: "+fname+": "+id);

    }

    print(number)
    {
        console.log("print 4 is calling..."+number);
        
    }
}

//object
const t1=new Test();
t1.print("Poonam",1010);
/*
everytime if you create same name method  and call it then last updated
method will return the result
*/

//Method Overriding
/*2.Run time polymorphism(Method Overriding)
--------------------------------
Whenever two classes are in relation and both the class have same name method
with same signature then child class override parent class method
*/

class Fruit
{
    eat()
    {
        console.log("...Enjoy Fruit.....");
        
    }
}

class Mango extends Fruit
{
    eat()
    {
        console.log("...Enjoy Mango Fruit.....");
        
    }
}

//object
const f1=new Fruit();//parent
f1.eat();

const f2=new Mango();//child updated method
f2.eat();









