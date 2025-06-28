/*
Georgian College
Course: Javascript Frameworks
Date: 06-27-2025
Students: 
Esteban Salazar Correa - 200582339
Geraldo Beiró Neto - 200587023
*/


// requirements and settings for script1.js
const express = require('express');
const app = express();
const PORT = 3000;

// Here we have the root for the home page
app.get('/', (req, res) => { //here we added the get() method as specified in the assignment instructions
  res.send('<h1>Created by (Group Members): Esteban / Geraldo </h1><p>Welcome to Assignment 3!</p>');
});

// this is the command for starting the server at port 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});