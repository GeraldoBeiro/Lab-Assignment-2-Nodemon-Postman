/*
Georgian College
Course: Javascript Frameworks
Date: 06-27-2025
Students: 
Esteban Salazar Correa - 200582339
Geraldo Beiró Neto - 200587023
*/

// Here we have the script2.js Express boilerplate/template with the requirements
// here we are importing the required modules
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Here we have the route to return JSON data
app.get('/countries', (req, res) => {
  fs.readFile('./data/countries.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading countries file');
    } else {
      res.send(data); // raw JSON output
    }
  });
});

// starting server at port 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/countries`);
});