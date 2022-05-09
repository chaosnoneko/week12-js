// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Create a function `isWithinRange` that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// - `isWithinRange(4, { min: 0, max: 5 })` ➞ true
// - `isWithinRange(4, { min: 4, max: 5 })` ➞ true
// - `isWithinRange(4, { min: 6, max: 10 })` ➞ false
// - `isWithinRange(5, { min: 5, max: 5 })` ➞ true
const scrable = (num, object) => {
    if(num >= object.min && num <= object.max){
        return `Your number ${num} is within the range of ${object.min} and ${object.max}!`;
    }else{
        return `Your number ${num} is not within the range of ${object.min} and ${object.max}`;
    }
};
console.log("scrable ==>", scrable(4, { min: 0, max: 5 }));
console.log("scrable ==>", scrable(4, { min: 4, max: 5 }));
console.log("scrable ==>", scrable(4, { min: 6, max: 10 }));
console.log("scrable ==>", scrable(5, { min: 5, max: 5 }));
// **2. Scrabble.**
// Create a function `calcMaxScrabbleScore`, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// ```javascript
// const scrabbleHand = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// ```
// `console.log(calcMaxScrabbleScore(scrabbleHand));` ➞ 28

//     [
//       { tile: "N", score: 1 },
//       { tile: "K", score: 5 },
//       { tile: "Z", score: 10 },
//       { tile: "X", score: 8 },
//       { tile: "D", score: 2 },
//       { tile: "A", score: 1 },
//       { tile: "E", score: 1 }
//     ]

// Here the player's maximum score would be `1 + 5 + 10 + 8 + 2 + 1 + 1` = 28
const scrableArr =[
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
    ]; 
const scrable2 = (arr) => {
    let boxSum = 0;
    for(let i = 0; i < arr.length; i++){
        boxSum = arr[i].score += boxSum;
    }
    return boxSum;
};
console.log("scrable2 ==>", scrable2(scrableArr));
// **3. Is it an empty object?**
// Create a function `isEmptyObject` that returns true if an object is empty, and false if otherwise.

// Examples:

// - `isEmptyObject({})` ➞ true
// - `isEmptyObject({a: 1})` ➞ false
const isEmptyObject = (object) => {
    if(Object.keys(object).length === 0 ){
        return true;
    }else{
        return false;
    }
};
console.log("isEmptyObject ==>", isEmptyObject({}));
console.log("isEmptyObject ==>", isEmptyObject({a : 1}));
// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key value pairs of letters and the number of occurrences for each letter.

// Example:

// - `countLetters("tree")` ➞ {t: 1, r: 1, e: 2}
function countLetters(str) {
    const objCount = {};
    for (let x = 0; x < str.length; x++) {
      if (objCount[str[x]]) {
        objCount[str[x]] += 1;
      } else {
        objCount[str[x]] = 1;
  
      }
    }
    return objCount;
  }
  console.table(countLetters("can it get even more harder?"));
// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - `freeShipping({ "Sponge": 3.50, "Soap": 5.99 })` ➞ false
// - `freeShipping({ "Surround Sound Equipment": 499.99 })` ➞ true
// - `freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })` ➞ false
const storeItems = {
	"Wool": 13.99,
	"Knitting Needles": 15.50,
	"Bag": 13.99,
}
const freeShipping = obj => {
	const valuesArray = Object.values(obj);
	let sum = valuesArray.reduce((acc, curr) => acc + curr, 0);
	return sum > 50 ? "Free shipping" : "Shipping costs apply";
}
console.log(freeShipping(storeItems));
// **6. Programming Object.**

// ```javascript
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
// };
// ```
const programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes",
};
// - Write an instruction that adds the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log('Add the language "Go" ==>', programming);
// - Change the difficulty to `7`.
programming.difficulty = 7;
console.log("Change the difficulty to the value of 7 ==>", programming);
// - Using the delete keyword, write an instruction to remove the jokes key from the programming object.
delete programming.jokes;
console.log("Delete keyword ==>", programming);
// - Write an instruction to add a new key called isFun with a value of true to the programming object.
programming.isFun = true;
console.log("Add a new key ==>", programming);
// - Using a loop, iterate through the languages array and console.log all of the languages.
for (i = 0; i < programming.languages.length; i++) {
    console.log("All of the languages ==>", programming.languages[i]);
  }
// - Using a loop, console.log all of the keys in the programming object.
const keys = Object.keys(programming);
for (let i = 0; i < keys.length; i++) {
  console.log("All of the keys ==>", keys[i]);
}
// - Using a loop, console.log all of the values in the programming object.
const values = Object.values(programming);
for (let i = 0; i < values.length; i++) {
  console.log("All of the values ==>", values[i]);
}
// - Add the method `worthwhile` that returns "Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging" if the keys "isChallenging" and "isRewarding" have values of true
const checkValue = () => {
    if (programming.isChallenging === true && programming.isRewarding === true) {
      return 'Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging';
    }
  };
  console.log(checkValue());
  console.log(programming);
// - **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why. // - my answer - it will give this a function
// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.
