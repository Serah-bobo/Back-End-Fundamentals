import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5000;  // You can change the port as needed

// Database URI
const mongoURI = 'mongodb://127.0.0.1:27017/taskDB'; // taskDB is the database name

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Middleware to parse JSON
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
