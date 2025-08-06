/*
JSON Object(String) to JS object

JSON.parse()


*/

//response
let res=`{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
        "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
    }
}`


//conevrt
let jsObject=JSON.parse(res);

//data id should be 2
console.log("Id is: "+jsObject.data.id);//2

console.log("Email id is: "+jsObject.data.email);









