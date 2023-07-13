const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { title: "Lord of The Rings", price: 80 },
  { title: "Diary of Anne Frank", price: 10 },
  { title: "One Thousand Years of Solitude", price: 20 },
  { title: "History of Hogwarts", price: 5 },
];

Library.create({
  name: "Toronto Library",
  books: bookData,
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

module.exports = Library;
