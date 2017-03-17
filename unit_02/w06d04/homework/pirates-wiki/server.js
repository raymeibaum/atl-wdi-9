const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

const logger = require('morgan');
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.redirect('/pirates/');
});

var piratesController = require(__dirname + '/controllers/pirates_controller.js');
app.use('/pirates', piratesController);

const port = process.env.PORT || 3000;
app.listen(port, console.info(`Server listening on port: ${port}.`));
