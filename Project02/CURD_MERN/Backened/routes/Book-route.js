const express = require('express');
const router = express.Router();
const Book = require("../models/Book");
const booksController = require("../controllers/books-controller");


router.get("/", booksController.getAllBooks); //getting products 
router.post("/", booksController.addBooks); //adding peoducts 
router.get("/:id", booksController.getById); //getting products by id
router.put("/:id", booksController.updateBook);  // for updating data we use put request in http
router.delete('/:id', booksController.deleteBook);
module.exports = router;