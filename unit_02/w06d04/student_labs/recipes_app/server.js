const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = require('hbs');
app.set('view engine', 'hbs');

const recipesController = require(__dirname + '/controllers/recipes_controller.js');
app.use('/recipes', recipesController);

app.listen(port, console.info(`server listening on port: ${port}.`));
