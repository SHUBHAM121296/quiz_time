
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quiz_development");

const db = mongoose.connection;

db.on("error"
, console.error.bind(console, "Error connecting to data base"));

db.once("open", () => {
  console.log("connected to data base : Mongoose");
});

module.exports = db;
