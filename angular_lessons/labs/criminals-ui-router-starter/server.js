const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/criminals-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const criminalsController = require('./controllers/criminals.js');
app.use('/api/criminals', criminalsController);

const port = process.env.PORT || 3000
app.listen(port, function logListening() {
  console.log(`Server listening on port: ${port}.`)
});
