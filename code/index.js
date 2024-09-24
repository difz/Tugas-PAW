const userRoute = require('./src/routes/user_routes.js');
const express = require('express'); 
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRoute = require('./src/routes/product_route.js');
const noteRoute = require('./src/routes/note_route.js');


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();

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

//LOcalhost

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/notes", noteRoute);
