const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const router = require("./routes/Book-route");
// MiddleWare 
app.use(express.json()); // error solution for converting data 
app.use(cors());
app.use("/books", router); // localhost:5000/books 

mongoose.connect(
    "mongodb+srv://foodApp123:foodApp123@cluster0.txvgoyc.mongodb.net/bookStore?retryWrites=true&w=majority"
)
    .then(() => console.log("connected to Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err))