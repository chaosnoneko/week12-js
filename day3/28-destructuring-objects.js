//! destructuring object

//* destructuring is a special/short syntax to unpack your array elements in bundle of variables

const data = [ "dci","web dev",32,"teacher","Chaos"]

const name = data[4];
const profession = data[3];
const age = data[2];
const course = data[1];
const institute = data[0]; //? how can we convert all that in a single line 

console.log(`My name is ${data[4]}, I am ${data[1]} 4{data[3]}`)


const [institute,course,age,profession,name] = ["dci","web dev", 32, "teacher", "chaos"]
//? like this we can write the code also to have a shorter syntax

//* stytax
const [] = [];

//* rest operator
const numbers = [2,51,64,5,65,2414,217]
//? we can destructure this array
const [ num1,num2,num3,num4,num5,num6,num7] = numbers

console.log(num1) //? we will get 2 

//* rest operator
const number = ["rollnumber",2,51,64,5,65,2414,217]
const [rollnumber,...ids] = numbers

console.log(rollnum)
console.log(ids)

//* destructuring few elements from array
const strudent =["Rene","Web Dev",21]
const [,courses] = student //? so we can store more variables 
console.log(courses) //? we will get 21 only since the other elements are destructured and won't show 

//* set default value 
const [a,b,c] = [2,3,4]
//* or 
const [a,b,c=2] = [2,3,4] //? in that way we set c as default 
console.log(a,b,c)
//*or
const [a,b,c=9] = [2,3] //? we will get a default value if we are not provided with it 
console.log(a,b,c)
//* or
const [a , b="anything",c=2] = [2, ,4] //? we will get 2,anything,4 
console.log(a,b,c)

//* destructuring in function
function sum(arr){
    console.log(arr[0]+arr[1]+arr[2])
}
sum([2,3,4])

//* or
function sum([a,b,c]){
    console.log(a,b,c)
}
sum([2,3,4]) //? to write our code in more easier way

//* destructuring Object
const dciCourse = {
    title: "web dev",
    start: "01.01.2021",
    students:20,
    address: {
        street: "vulunktrasse",
        postalcode:14323,
        city: "berlin"
    }
}

const{title, start,students,address} = dciCourse
const{city,street,postalcode} = address //? we can destructure the object and we can use it directly in the console.log instead of address

consol.log(`this is ${dciCourse.title} course , starting from ${dciCourse.start} , address is ${dciCourse.address.city}`)

//* destructuring in function
function isWhithinRange (num,{min,max}){
    if (num>=min && num<=max){
        return true
    }return false
}
console.log(isWhithinRange(2,{min:3,max:10})) //? it will come as false