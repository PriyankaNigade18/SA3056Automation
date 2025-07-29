
/*
function : group of statements we can run with function,funtcion is not belongs to class

method : group of statment we can run with method but method belongs to class

*/


class StudentData
{    
    //Object initilazation is possible with Constructor
    
    constructor(i,f)
    {
        this.id=i;
        this.fname=f;
    }

    //method
    /*accept(i,f)
    {
        //local variable
        console.log("Data is defined in accept()");
        
        // let id=101;
        // let fname="Jay";

        //global data declaration is only possible with this keyword
        this.id=i;
        this.fname=f;
    }*/
   
     show()
    {
        console.log("Data is calling form show()");
        //calling global data using this keyword
        console.log("id is: "+this.id);
        console.log("name is: "+this.fname);
        
      
    }
  

}

/*class objects will be created outside of class
Member of a class we can call with obj and . operator
constructor always called at the time of object cretion
*/

const s1=new StudentData(101,"Jay");//calling constructor
//s1.accept(101,"Jay");
s1.show();

console.log("----------------------");

//second student
const s2=new StudentData(102,"Sana");
//s2.accept(102,"Sana");
s2.show();


console.log("----------------------");

const s3=new StudentData(201,"Varun");
s3.show();











