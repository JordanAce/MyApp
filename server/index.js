const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const db = require ('../database/index.js');
const bodyParser = require ('body-parser');


app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/appUsers', function (req, res) {
  let data = req.body;
  console.log('Inside Post Function', data);
  db.save(data);
})

app.listen(port, () => {
  console.log(`Server Now Listening at http://localhost:${port}`);
});