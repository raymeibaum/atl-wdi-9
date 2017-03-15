/* packages */
const path = require('path');
const logger = require('morgan');
const express = require('express');
const hbs = require('hbs');

/* app settings*/
const app = express();
const port = process.env.PORT || 3000;

/* set up the application params*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}))

// log
app.use(logger('dev'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', (req,res) => {
  res.send('This is our Home Page');
});

let todosController = require(__dirname + '/controllers/todos_controller.js');
app.use('/todos', todosController);

// Start server
app.listen(port, () => {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
