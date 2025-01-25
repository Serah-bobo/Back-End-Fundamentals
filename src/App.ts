import express from "express";
import dotenv from "dotenv";
const mongoose = require("mongoose");

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000;

//const mongoURI = process.env.MONGO_URI;
const mongoURI = process.env.MONGO_URI;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error:Error) => {
      console.error('Error connecting to MongoDB:', error);
    });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

