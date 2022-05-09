//**Instructions**
//1. Create the following object: 
//```javascript
let log = console.log;

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };
//* Create a method that prints the following: 
const printSentence = () => {
    log(`${student.firstName} ${student.lastName} is a student in class `)
}
printSentence(student)
//```javascript
//"John smith is a student in class 12"
//```
//2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
    firstName: 'Keiko',
    lastName: 'Kitagawa',
    age: 36,
    job: 'translater',
    city: 'Izumo',
    printInfo: function() {
        return `${this.firstName} ${this.lastName} is  ${this.age} years old ${this.job} from ${this.city}.`
    }
}
log(person.printInfo())
//## Bonus

//3. Write a method to get the length of the person object.
console.log(Object.keys(student).length);