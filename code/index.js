const e = require('cors');
const express = require('express'); 
const app = express();
const mongoose = require('mongoose');

//MONGO DB CONNECTION
if (!process.env.MONGO_URI) {
    throw Error("Database connection string not found");
  }
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Succesfully connected to MongoDB");
    }).catch((err) => {
      console.log("Failed to connect to MongoDB");
      console.log(err);
    });