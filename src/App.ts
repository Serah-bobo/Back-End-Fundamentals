import express from "express";
import dotenv from "dotenv";
import ContactRoutes from "./routes/ContactRoutes"
const mongoose = require("mongoose");

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000;
app.use(express.json())
//const mongoURI = process.env.MONGO_URI;
const mongoURI = process.env.MONGO_URI;
app.use("/api/contacts", ContactRoutes)


// Root route
app.get("/", (req, res) => {
  res.send("Contact Manager API is running...");
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

