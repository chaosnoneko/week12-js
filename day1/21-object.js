//! Primitive datatype
//* String , Number , Boolean , undefined , null , symbol

const str = "hello"; //? const str = new String("hello")
const num = 23 ; //? const num = new Number (23)
const bool = true; //? const bool = new Boolean(true)

//! Object datatype
//* Arrays , Function , Object

const number = [1,2,3,4] //?const number = new Array (1,2,3,4)
const studentData = ["Joseph",24,"fwb04","Berlin"]
//* object is set {} of key value pairs
//* collection of data in a single namespace
//* structured data format

//* use constructor 
const user = new Object()
console.log(user)
//? or you can use it like that 
const user = new Object()
user.name = "John"; //? property inside object
user.age = 23;
user.class = "fbw04";
user.city = "Berlin"
console.table(user)
console.table(user["name"]) //? square bracket notation we can target a surtain value
console.log(user.name) //? bot notation

//* use literal way
const user = {
    name:"Micheal",
    age:32 ,
    class:"fbw04"
    address:{street:"alt-buch", house:43,city:"berlin", location:{lat:2324, long:3242432}},//? it can be nested 
    isStudent:true,
    skills:["html","css","js"],
    ["first name"]:"smith"
} //? you can set the values directly 
console.log(user.first name) //? it will get an error if we use first name 
console.log(user["first name"]) //? by using this method it will print Smith

const fruit = "mango"
const fruitBucket={
    [fruit]:2
} 
console.log(fruitBucket.mango)//? it will print out mango 2

const fruitBucket={
    [fruit+"s"]:2
} //?by writing expresion we can change a value that will change with the value of the item
console.log(fruitBucket)

//*in object we can use reserved keywords as a key for that object
const reserved_keywords = {
    for:1,
    if:2,
    class:3,
    function:4,
    while:5
}
console.log(reserved_keywords) //? it will print out everything inside in one line

//* l literal way
const user = {}

//* user input
const user_name = "ththjsykmy";
const user_passwort = "arrhate5633"
const strudent = {
    username : user_name,
    password : user_passwort 
}