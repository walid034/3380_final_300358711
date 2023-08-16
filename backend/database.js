const mongoose = require("mongoose")

const uri = "mongodb+srv://aminkhanm:mongotry@cluster0.patgqap.mongodb.net/BookList?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

module.exports = connection;