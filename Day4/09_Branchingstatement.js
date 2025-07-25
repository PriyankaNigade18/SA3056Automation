/*
break: It will exit from switch and loop 
continue: To skip certain part of code/execution and continue execution


*/


console.log("----------break-------------");


for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else
    {
        console.log(i);
        
    }

}


console.log("----------------");


for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else
    {
        console.log(i);
        
    }

}

console.log("----------continue--------------");

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        continue//skip & continue
    }else
    {
        console.log(i);
        
    }
}









