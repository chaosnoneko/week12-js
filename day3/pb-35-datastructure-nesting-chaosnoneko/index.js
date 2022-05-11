// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
let board = [
[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]
];
const loopArray = ( array ) => {
    let box = [];
    for (let item of array) {
        console.log("item ==>", item);
        for(let item2 of item) {
            console.log("item2==>", item2); 
            box.push(item2);
        }
    }
    return box;
};
console.log("loopArray ==>" , loopArray(board))
// ```

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.
const doggo = {
    name : "Mikihisa",
    breed: "chihuahua",
    favoriteFood: [{one: "best-dod-food"},{two: "better-dog-food"}],
    printFavFood: function (){
        const printFood = [];
        for(let item in this.favoriteFood){
            for(let key in this.favoriteFood[item]){
                printFood.push(this.favoriteFoods[item][key]);
            }
        }
    }
}
// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
const  recipes = {
    ingredients: {
        tapioka: "tapioka",
        sugar: "sugar",
        tea: "tea",
    },
    printIngredients : function (){
        for(let key in this.ingredients){
            console.log(this.ingredients[key]);
        }
    },
};
recipes.ingredients.pudding = "pudding";
recipes.ingredients.sugar = "brown-sugar";
recipes.printIngredients();