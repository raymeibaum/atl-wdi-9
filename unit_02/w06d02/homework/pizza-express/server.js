var express = require('express');
var app = express();

var hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

var pizzaController = require(__dirname + '/controllers/pizza_controller.js');
app.use('/', pizzaController);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}.`));
