const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mern5-db")
  .then(() => {
    console.log("Connected to MongoDB: mern5-db");
  })
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

module.exports = mongoose;
