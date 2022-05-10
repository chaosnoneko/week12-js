//! iterate object ( array and object )

const student = {
    firstName : "Rene",
    lastName : "Franz"
}

const keys = Object.keys(student) //? ["firstName" , "lastName"]

for(let i = 0 ; i<keys.length ; i++){
    console.log(keys[i])
} //? it will print firstName lastName ( not the name but not the value it self)

console.log(student["firstName"]) //? it will print the value it self

//* if we want to receive the value we should write it like that
for(let i = 0 ; i<keys.length ; i++){
    console.log(keys[i])
    console.log(student[keys[i]])
} //? we will get the value + the key it self 

console.log("firstName" in student) //? we will get true it will check only the keys one by one
//* or
console.log("Franz" in student)

//* or
for(const key in student){
    console.log(key)
} //? for ... in => iterate over your object // it will give the name of both keys

for(const key in student){
    console.log(key)
    console.log(student.key)
} //? we can not use . in an array

const dci = {
    course : "Web Dev" ,
    student : 230 , 
    address : {
        city:"berlin",
        postalCode:12345
    }
}
for (const key in dci){
    console.log(key);
}//* or

for (const key in dci){
    if(typeof dci [key]==="object"){
        for (const innerkey in dci[key]){
            console.log(dci[key][innerkey])
        }
    }else{
        console.log(dci[key]);
    }
}

//* for ... of loop => iterate array
let number = [2,4,6,8,0]
for(const a in){
    console.log(a)
} //? it will print every number in a line from top to bottom

//*or 
let number = [2,4,6,8,0]
for(const item of number){
    console.log(item)
} //? we need to have it as a number if not it won't work 

let str = "Hello World";

for (const item of str){
    console.log(item)
} //? it will print all in line top to bottom

let str = "hello World"
let result =  ""
for (const item of str){

    if (str[0]===item){
        result += item.toUpperCase()

}else{
    result += item
}}
console.log(result) //? it will print Hello World in one line with first capital letters