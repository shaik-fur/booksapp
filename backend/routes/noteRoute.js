const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.route("/").post((req, res) => {
    //console.log(req.body.name);
    const name = req.body.name;
    const title = req.body.title;
    const newBook = new Book({
        name,
        title
    });
    newBook.save();
})

module.exports = router;