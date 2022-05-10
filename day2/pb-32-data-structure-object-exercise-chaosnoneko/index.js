//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here


var recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cumin","cinnamon","cocoa"]
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

var books = [
    {title: "The Hobbit",
     author: "J.R.R. Tolkien",
     alreadyRead: false
    },
    {title: "Ikigai",
    author: "Hector Garcia and Francesc Miralles",
    alreadyRead: true
    }];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }