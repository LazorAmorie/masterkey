const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Example
app.get('/', (req, res) => {
  res.send('Welcome to the MasterKey Backend API Updated For u!');
});

app.post('/api/products', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect("mongodb+srv://georgehussein:ed4oklVMszouyaWI@backenddb.5roxosq.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then (()  => {
  console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
  console.log("connection fail", error);
});