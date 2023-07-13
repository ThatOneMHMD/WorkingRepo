const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: String,
  price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
  console.log(
    `This book is called: ${this.name} and its price is: ${this.price}. It belongs to the ${this.genre} genre. Enjoy!`
  );
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model
const lordOfTheRings = new Book({
  name: "lordOfTheRings",
  Genre: "fantasy",
  Price: 150,
});

// TODO: Call the custom instance method on the instance
const responseGetInstance = lordOfTheRings.get("Price", String);
console.log(`The price of this book in string form is ${responseGetInstance}`);

lordOfTheRings.getDiscount();

module.exports = Book;
