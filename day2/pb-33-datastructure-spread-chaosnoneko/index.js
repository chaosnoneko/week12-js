// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
 
const euroCountries = ["Germany","Austria","Romania","Bulgaria","Italy"];
const asianCountries = ["Japan", "Russia" , "Korea","China","India"];
console.log([...euroCountries,...asianCountries]);
// * Once again create two arrays. Save all elements of both arrays to another variable.
const family = ["mother","father","daughter","son"];
const relatives = ["uncle","aunt","cousin","nephew"];
const members = [ ...family, ...relatives];
console.log(members)
// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
const fruits = ["strawberry","mango","nashi","lemon","dragon fruit"];
const copy = [...fruits]
console.log(fruits,copy)
// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
const num = [80,28,38904,98695325,64256345,5236463532,876262674];
const findLargerNumber = arr =>{
    return Math.max(...arr);
}
const largestNumber = findLargerNumber(num);
console.log(largestNumber);
// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
const findSmallestNumber = arr => {
    return Math.min(...arr);
}
const smallestNumber = findSmallestNumber(num);
console.log(smallestNumber);
// #### 5. Clone and Merge
// Given two objects:
// ```javascript
const person = {name: "John"};
const job = {role: "Teacher"};

// * 5.1 Clone the person object.
const personClone = {...person};
console.log(personClone);
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
const employee = { ...person, ...job};
console.log(employee);
// * 5.3 Then change the values of the properties in the employee object.
employee.name = "Chaos"
employee.role = "Web Developer";
console.log(employee)
// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false
const isWhole =(num1,num2,num3,num4) => {
    console.log(num1,num2,num3,num4);
    return Number.isInteger((num1+num2+num3+num4)/4);
}
console.log(isWhole([1,2,3,4]));
console.log(isWhole([9,2,2,5]));
// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!