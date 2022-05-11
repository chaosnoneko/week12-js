const numbers = [2,3,4,5,6]
numbers.push(7) //? 7 will be pushed in that array

//! advanced array Methods

//* Array.map()
//? it will return an array
const numbers =[1,2,3,4,5]
numbers.map(function(item){console.log(item*item)}) //? you have a building for  loop what function you have there it will pass it to that array
//? map is most useful and used method
//? map will call function on each element of array and return an array
const numbers =[1,2,3,4,5]
numbers.squareNumber = numbers.map(item=>item*item) // [1,4,9,16,25]
const data = ["kind" , "hard" , "cool"] //? expected output ["kinder","harder", "cooler"]
const resultArray = data.map(function(word){
    return word+"er"
}) // this function will always bring you a new array
console.log(squareNumber)

const resultArray = [] //? the normal way without map
for(let i = 0; i<data.length; i++)[
    resultArray.push(data[i]+er)
]

//* Array.filter()
//? filter will call function on each element of your array and returns an array
//? filter will not always return you same length of array
const cities = ["berlin","frankfurt","bonn","hamburg"]
const updatedCities = cities.filter(function(item){
    return item==="berlin"
}) 
console.log(updatedCities) //? it will print a new array with only berlin inside
const updatedCities = cities.filter(function(item){
    return item!=="berlin"
}) //? if we want to delete it 
console.log(updatedCities) //? we will get all the cities without berlin in it 
//* Array.reduce()
//? reduce returns any datatype "string" , "number" , "array" , "object"
const randomNumbers = [2,3,6,8,9,3,2] //? number
const sum = randomNumbers.reduce(function(accumulator,item){
    accumulator+=item
    return accumulator
}, 0) //? in 3th place we can add anything we want but since we have numbers we add it as a number
console.log(sum) //? as a result we will get 33
//? another example
const occurance =[1,2,3,2,1,3,5,6,3,4,5,6,7,2] //{1: 2, 2; 4, ....}
const result = occurance.reduce(function(acc, item){
    if(acc[item]){ //? we are checking if acc is a braked item
        acc[item]++; //? if the first item is not there to create that key 
    }else{
        acc[item]=1
    }
    return acc
},{"1":1}) //? it will create a key here
console.log(result)
//? dynamic value

//* Array.find()
//? if item found in array it will return that item otherwise return undefined
let names = ["John","Robert","Max","Hanny"]
const item = names.find(function(name {
    return name==="Robert"
}))
console.log(item) //? it will return undefined 
//* Array.every()
//? returns boolean value depending on the condition ( return true if all items meet that condition otherwise false)
let names = ["John","Robert","Max","Hanny"]
const bool = names.every(function(name){
    return name.includes("o")
})
console.log(bool) //? we will get false since not every name has "o"

//* Array.some()
//? it will return as a boolean value
//? exactly like a find method but it will give only true or false

//* Array.sort()
//? it will change the original array

//* Array.forEach()
//? it won't return you anything
data.words = ["a","b","c"]
words.forEach(function(item){
    console.log(item+"____")
})
//? when you pass it to another function it will be advanced array method 
function print(a){
    console.log(a)
}
print("string value")
//? or we can write it like this 
function printSquare(arr, func){
    for(const item of arr){
        func(item)
    }
}//?we target each element and pass it to the other function , we can do everything in that function
printSquare([1,2,3,4] , function(item){console.log(item)}) //? it will print from top to bottom 1-4

