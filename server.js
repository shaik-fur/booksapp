const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static("bookjs/build"))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "bookjs", "build", "index.html"))
})

mongoose.connect("mongodb+srv://shaikfurkhan1998:"+encodeURIComponent("&Haik#123")+"@cluster0.024ix.mongodb.net/booksdb");

app.use("/", require("./backend/routes/noteRoute"));

app.listen(3001, function(){
    console.log("express server is running on port 3001");
});