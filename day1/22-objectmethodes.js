//! object methods

const cellPhone = {
    name: "Samsung",
    model:"AN3234234",
    playGame:function(){
        console.log("game start")
    }
}
cellPhone.playGame()

const user ={
    first_name:"Nikolas",
    last_name:"Smith",
    AbstractRange:32,
    printUser:function(){
        console.log(`student name is ${first_name}${last_name}, he is ${age} years old`)
    }
}
console.log(user)

const user ={
    first_name:"Nikolas",
    last_name:"Smith",
    AbstractRange:32,
    printUser:function(){
        let first_name="Chaos"
        console.log(`student name is ${user.first_name}${last_name}, he is ${age} years old`)
    }//? to target the name above
}

//! this keyword refers to object which invoke that function
//! in the case of arrow , this keyword points to the context where parent object is defined

function printThis(){
    console.log(this)
}
printThis() //? printThis 

//Object Methods

/* const cellPhone ={
    name:"Samsung",
    model:"AN3234234",
    playGame:function(){
        console.log("game start")
    }
} */

const user ={
    first_name: "Nikolas",
    last_name: "Smith",
    age:32,
    displayUserInfo:function(){
        console.log(`student name is ${this.first_name} ${this.last_name},he is ${this.age} years old`)
    },
    greetUser:function(){
        console.log(`hello , ${this.last_name}`)
    },
    incrementAge:function(){
        this.age++;
        console.log(this.age)
    }

}

// this keyword refers to object which invoke that function
// in the case of arrow, this keyword points to the context where parent object is defined

user.displayUserInfo()
user.greetUser()
user.incrementAge()

//check if that key exist in that object
/* console.log(user.hasOwnProperty("age")) */
/* console.log("aged" in user) */



/* function printThis(){
    console.log(this)
}
printThis() */

// printThis.call(user) // this points to user object



const car = {
    name: "Toyota",
    model:"JDS4324243"
}
/* car.name = "BMW" */
console.log("model" in car)

//Object Contructor


console.log(Object.keys(car)) // returns an array containing keys 
console.log(Object.values(car))// returns an array containing values
/* console.log(Object.entries(car)) */// returns an array container entries

/* const entries = Object.entries(car)
console.log(entries) */

const numberEntries=[   ["firstNumber",3] , ["secondNumber",6 ]  ]
console.log(Object.fromEntries(numberEntries))/*  */



//  let result = {}

// for(let i = 0; i< numberEntries.length; i++){
//     /* numberEntries[i]  */   // ["firstNumber",3] 
//     result[ numberEntries[i][0] ] = numberEntries[i][1]
// }

// console.log(result) 

/* Object.freeze(car)
console.log(Object.isFrozen(car))
Object.seal(car)
console.log(Object.isSealed(car)) */


//create hidden properties inside an object
Object.defineProperty(car , "price" ,{value:23000 , writable:false} )
/* Object.defineProperties(car, ["price","secret"], [{},{}]) */

car.price = 24000;
console.log(car.price)




let names=["berlin","lahore","newyork"]
let countries= ["germnay","pakistan","usa"]

// {
//      berlin : "germnay",
//      lahore: "pakistan",
//      newyork: "usa"
//    }