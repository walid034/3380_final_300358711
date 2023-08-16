const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: false}
});

const Book = mongoose.model('300358711-Walid', bookSchema);
module.exports = Book;
