//! Shallow Clone vs Deep Clone

const student = {
    name :"Mike"
    age:26
}
const student2 = student;
//? shallow clone , they have same reference which means it will change here to 

student2.age = 30;
console.log(student2)
console.log(student) //? we made a copy of it and it will print out with the new value we have and will get the same result for both of them 
//* 2x result = name :'Mike',age:30
//! Deep clone
//* make cope or merge different object
const copyStudent = Object.assign({}, student)
//? if we want to change the age of the student 
copyStudent.age =30;
console.lot(copyStudent)
console.log(student) // ?if we write it like this we will get 2 different result without them repeating them self


//! merging objects
const secondStudent = {
    name : "Oliver",
    age:34
    startingData :"01.01.2021"
}
const firstStudent = { 
    institute:"DCI",
    course:"Web Development"
    startingData:"21.01.2021"
}
const mergedObject = Object.assign({},firstStudent,secondStudent)
console.log(mergedObject) //? here we merged both of the values and get the result how we have structured it but whatever is in the secondStudent will be overwritten it by the firstStudent since we wrote it like that //? if we switch places than we will get the reversed result

const student = {
    name :"Mike"
    age:26
    address(
        house:21,
        street:40,
        city:"berlin"
    )
}
copyStudent.address.city="Hamburg"
console.log(student) //? like this we will get the output with the new city

console.log(JSON.stringify(student)) //? it will get stored how it is 
const newCopy = JSON.stringify(student) //? convert object into string
const deepCopy = JSON.parse(newCopy) //? convert back string into object
console.log(newCopy)


const student = {
    name :"Mike",
    age:26,
    address: {
        house:21,
        street :40,
        city:"berlin",
        location:{
            lat:232332,
            long:423424
        }
    },
    sayhi: function(){
        console.log("Hello")
    }
}
// Deep clone
// make copy or merge differnce objects
/* const copyStudent  = Object.assign({}, student) */
 
const newCopy = JSON.stringify(student) // convert object into string
const deepCopy = JSON.parse(newCopy) // convert back string into object

deepCopy.age = 30;
deepCopy.address.city = "Hamburg"

console.log(deepCopy)
console.log(student)

// copyStudent.age = 30;
// copyStudent.address.city="Hamburg"
// console.log(copyStudent)
// console.log(student)
// merging 2 objects
// const firstStudent = { 
//     institute:"DCI",
//     course:"Web dev",
//     startingDate:"01.01.2021",
// }
// const secondStudent = {
//     name:"Oliver",
//     age:34,
//     startingDate:"12.12.2021"
// }

// const mergedObject = Object.assign({},secondStudent, firstStudent)
// console.log(mergedObject)


//!use lodash library to make a deep copy

const deepCopy = _.
