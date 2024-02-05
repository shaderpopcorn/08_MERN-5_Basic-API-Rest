const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/projects-db")
  .then(() => {
    console.log("Connected to MongoDB: projects-db");
  })
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

module.exports = mongoose;
