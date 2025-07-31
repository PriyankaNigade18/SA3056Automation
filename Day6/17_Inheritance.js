/*
What is Inheritance
---------------------
Aquaring one class properties into other class is called inheritance

purpose
-------------
-Reusability
-to achieve run time polymorphism(Method Overriding)
-to avoid duplication

Real time example
--------------------
Parent and Child relation

How to implement
-------------------
using extends keyword

Types:
-----------
Js implements
--------------------
1.Single level 
2.Multi level
3.Heirarchical

Js not implemets
------------------
4.Multiple 
5.Hybrid


*/

class Vehical
{
    breakFeature()
    {
        console.log("Vehical.....Break()");
        
    }
}




class Car extends Vehical
{

    start()
    {
        console.log("Car......start()");
        
    }

    refule()
    {
        console.log("Car....refule()");
        
    }

    stop()
    {
        console.log("Car....stop()");
        
    }


    price()
    {
        console.log("Car.....1L");
        
    }
}

class BMW extends Car //Car is parent and BMW child : Single level
{
    autoEngine()
    {
        console.log("BMW.......autoEngine()");
        
    }
    price()
    {
        console.log("BMW.....80L");
        
    }
}


class Audi extends Car
{
    autoGear()
    {
        console.log("Audi.....autoGear()");
        
    }
    price()
    {
        console.log("Audi.....50L");
        
    }
}
//object
console.log("-----Parent Object: Only parent method------");

const c1=new Car();
c1.start();//individual
c1.refule();//individual
c1.stop();//individual
c1.breakFeature();//inherited
//c1.autoEngine();//TypeError: c1.autoEngine is not a function

console.log("-----Child Object:  parent method+ Child method------");
const c2=new BMW();
c2.start();//inherited
c2.refule();//inherited
c2.autoEngine();//individual
c2.stop();//inherited
c2.breakFeature();//inherited
c2.price();

console.log("----------------");
const c3=new Audi();
c3.start();
c3.refule();
c3.stop();
c3.autoGear();
c3.breakFeature();
c3.price();













