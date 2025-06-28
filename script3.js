/*
Georgian College
Course: Javascript Frameworks
Date: 06-27-2025
Students: 
Esteban Salazar Correa - 200582339
Geraldo Beiró Neto - 200587023
*/

// script3.js
// importing express and create app
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON in requests
app.use(express.json());

// Sample list of countries (this is our temp database, not from a file)
let countries = [
  { "id": 1, "name": "Brazil", "continent": "South America", "language": "Portuguese" },
  { "id": 2, "name": "Colombia", "continent": "South America", "language": "Spanish" },
  { "id": 3, "name": "Canada", "continent": "North America", "language": "English/French" },
  { "id": 4, "name": "China", "continent": "Asia", "language": "Mandarin Chinese" },
  { "id": 5, "name": "Russia", "continent": "Europe/Asia", "language": "Russian" },
  { "id": 6, "name": "England", "continent": "Europe", "language": "English" },
  { "id": 7, "name": "Japan", "continent": "Asia", "language": "Japanese" },
  { "id": 8, "name": "Lebanon", "continent": "Asia", "language": "Arabic" },
  { "id": 9, "name": "Syria", "continent": "Asia", "language": "Arabic" }
];

// CREATE - this adds a new country to the list
app.post('/countries', (req, res) => {
  countries.push(req.body);
  res.send('Country added');
});


// READ - this shows all the countries in JSON format
app.get('/countries', (req, res) => {
  res.json(countries);
});

// UPDATE - this finds the country by ID and replaces it with the new data
app.put('/countries/:id', (req, res) => {
  const countryId = parseInt(req.params.id); // we get the ID from the URL
  countries = countries.map(country =>
    country.id === countryId ? req.body : country
  );
  res.send('Country updated');
});

// DELETE - this removes the country with the given ID
app.delete('/countries/:id', (req, res) => {
  const countryId = parseInt(req.params.id); // same here, we use the ID from the URL
  countries = countries.filter(country => country.id !== countryId);
  res.send('Country deleted');
});

// Start the server and show the URL in the terminal
app.listen(PORT, () => {
  console.log(`CRUD API running at http://localhost:${PORT}`);
});


/*
I will leave this code here for the presentation in class.. adding Germany to the countries.json file using Postman

{
  "id": 10,
  "name": "Germany",
  "continent": "Europe",
  "language": "German"
}
*/