const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const db = require ('../database/index.js');
const bodyParser = require ('body-parser');


app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
  res.redirect("/");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/appUsers', function(req, res) {
  console.log('Inside Post Function', req.body);
});

app.listen(port, () => {
  console.log(`Server Now Listening at http://localhost:${port}`);
});