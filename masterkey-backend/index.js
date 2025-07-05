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

mongoose.connect("mongodb+srv://georgehssein:12/jan/5002@masterkeydb.ghpt6cm.mongodb.net/Masterkey-API?retryWrites=true&w=majority&appName=MasterKeyDB")
.then (()  => {
  console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
  console.log("connection fail");
});