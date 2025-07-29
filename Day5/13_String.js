
/*
String is immutable class in js

*/


let s1="hello";
console.log(s1);//hello
s1[0]='H';
console.log(s1);//hello

console.log("-----String methods--------");
//trim()
let s2="       Welcome All        ";
console.log(s2);
//ignore white space before and after string we have trim()
console.log(s2.trim());

//length property not method
let s3="Welcome";
console.log("total charaters are: "+s3.length);//7

//convert string into uppercase : toUpperCase() toLowerCase()
console.log(s3.toUpperCase());
console.log(s3.toLowerCase());

//charAt(index)

console.log("character at index 5: "+s3.charAt(5));//m

//cancat()
let s4="All";
console.log(s3+" "+s4);
console.log(s3.concat(" "+s4));

//includes(): look for partial match
let s5="Cypress is webui and api testing tool";
console.log("search for tool?: "+s5.includes("tool"));//true
console.log("serahc for selenium?: "+s5.includes("selenium"));//false

//replace()
let s6="we are learning programming and its javascript programming";
console.log(s6.replace("programming","**********"));
//replaceAll()
console.log(s6.replaceAll("programming","######"));

//split()
let toolSet="Selenium,Postman,Appium,Cypress,Playwright";
console.log(toolSet);
console.log("---------------");

let arr=toolSet.split(",");

for(let i of arr)
{
    console.log(i);
    
}

//cypress
console.log(arr[3]);
console.log(toolSet.split(",")[3]);


//assignment
/*
declare string 
bill="total amount is 5000"

scenario: test from bill that amount should be less that 10000

*/


























