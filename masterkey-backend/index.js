const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

// Example
app.get('/', (req, res) => {
  res.send('Welcome to the MasterKey Backend API Updated For u!');
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes)


app.post('/api/products', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.MONGODB_URI)
.then (()  => {
  console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
  console.log("connection fail", error);
});