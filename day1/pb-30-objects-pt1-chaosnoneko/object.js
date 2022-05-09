// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 
const person = {
    first_name: "John",
    last_name: "Smith",
    age: 15,
    city: "Hamburg"
}
console.log(Object.entries(person))
// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```
function getObjectValues(obj) {
    return Object.values(obj)   
}
console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  }));
// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: "Paris"
// }
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".
let person2 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: 'Paris',
   printValue(){
      return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`
  }
}
  console.log(person2.printValue());
// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// ```
// * Expected output: 
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// ```
function objectToArray(obj) {
    return Object.entries(obj);
}
console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
  })); [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
console.log(objectToArray({
   cats: 1,
   dogs: 2, 
   turtles: 4
 })); 
// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```
const student = {
    name: "Mike", 
    class: "4A" ,
    course: "English",
  };
  console.log(Object.keys(student)); //[ 'name', 'class', 'course' ]
//WITH ARROW FUNCTION
const arrayofProperties = (object) => {
    let keys = [];
    for(let key in object){
        keys.push(key);
    }
    return keys;
};
console.log(arrayofProperties(student));
// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
let first = {firstName: "John"}
let last = {lastName: "Smith"}
function twoObjects (obj1, obj2) {
const newObj = Object.assign(obj1, obj2);
    return newObj
}
console.log(twoObjects(first, last));
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
let obj1 = {firstName: "John"}
let obj2 = {lastName: "John"}
function twoObjects2(par1, par2) {
const newObj = Object.assign(par1, par2);
    return newObj
}
console.log(twoObjects2(obj1, obj2)); //{ firstName: "John", lastName: "John" } will print, and cosidered both object values. It will only print the obj2, only if the both object keys are the same. 

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 
// ```javascript
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// ```
// * Expected Output: 
// ```javascript
// {John: "name", teacher: "job"} 
// ```
let person3 = {
    name: "John", 
    job: "teacher"
  };
  function swap(value){
    const objSwitch = {};
    for(let key in value){
        objSwitch[value[key]] = key;
    }
    return objSwitch;
  };
  console.log(swap(person3));
// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```
const objectToArray2 = (object) => {
    let firstArr = Object.keys(object);
    let secondArr = Object.values(object);
    return [firstArr, secondArr];
};
console.log(objectToArray2({ a: 1, b: 2, c: 3 })); 
console.log(objectToArray2({key: true})); 