const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const morgan = require("morgan")

const app = express();
app.use(cors());
app.use(morgan("tiny")) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/v1', api);
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

module.exports = app;