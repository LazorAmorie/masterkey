const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Example
app.get('/', (req, res) => {
  res.send('Welcome to the MasterKey Backend API Updated For u!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
// ...rest of you
.then (()  => {
  console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
  console.log("connection fail", error);
});