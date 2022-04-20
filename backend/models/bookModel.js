const mongoose = require("mongoose");

const booksSchema = {
    name : String,
    title : String
}

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;