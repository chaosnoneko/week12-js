//! abstract and referential comparison

const a = "hello";
const b = a;

console.log(a===b) //? we will get true in that case


const user = {
    name: "Chaos"
    age:24
}
const user2 = {
    name: "Chaos"
    age:24
}
console.log(user === user2) //? if we compare 2 object we always will get false
console.log([1]===[1]) //? we will get false again because of the reference 

const fruits = {
    bananas : 3,
    oranges : 5
}
const fruits2 = fruits;
console.log(fruits)
console.log(fruits2) //? it will give true because of the reference 

fruits2.bananas = 20;

console.log(fruits)
console.log(fruits2) //? we will get the values we have 

const number = [3,6,8,4] //? it will get stored in the heap memory 

function sum(){
    console.log(4+5)
}
console.log(sum === add) //? when we compare 2 object we will get false // they have different reference to each other and will be saved in the heap memory
//* if we write 
console.log(typeof sum ) //? it will come out as a function 