const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")

const db = require("./database")
const BookModel = require("./models/book.model");
const route = require("./routes/routes")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);

app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
});