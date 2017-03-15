const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send("Welcome. Check out /pirates")
})

var piratesController = require(__dirname + '/controllers/pirates_controller.js');
app.use('/pirates', piratesController);

app.listen(port);
