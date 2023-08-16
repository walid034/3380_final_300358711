const router = require("express").Router();
const Book = require("../models/book.model");
const db = require("../database")

// Get all books
router.route("/").get((req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get description of specific book
router.route("/:id").get((req, res) => {
    Book.findById(req.params.id)
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Add/save book
router.route("/").post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
  
    const newBook = new Book({
      title,
      author,
      description
    });
  
    console.log("checkpoint");
  
    newBook
      .save()
      .then(() => res.json("Book added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });


// Edit book
router.route("/:id").put((req, res) => {
    const filter = { _id: req.params.id};
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const updatedBook = {
        title: title,
        author: author,
        description: description
    }

    Book.findOneAndUpdate(
        filter,
        updatedBook
    )
    .then(() => res.json("Book Updated!"))
    .catch((err) => res.status(400).json("Error: " + err))
});

// Delete book
router.route("/:id").delete((req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then(() => res.json("Book Deleted!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;