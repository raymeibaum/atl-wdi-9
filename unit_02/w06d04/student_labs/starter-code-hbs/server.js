const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const logger = require('morgan');
app.use(logger('dev'));

const hbs = require('hbs');
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
  res.send('This is our Home Page');
});

let todosController = require(__dirname + '/controllers/todos_controller.js');
app.use('/todos', todosController);

const port = process.env.PORT || 3000;
app.listen(port, console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date()));
