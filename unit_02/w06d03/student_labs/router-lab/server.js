var express = require('express');
var app = express();

var hbs = require('hbs');
app.set('view engine', 'hbs');

var mathController = require(__dirname + '/controllers/math_controller.js');
app.use('/math', mathController);

var greetingController = require(__dirname + '/controllers/greeting_controller.js');
app.use('/greeting', greetingController);

var reverseController = require(__dirname + '/controllers/reverse_controller.js');
app.use('/reverse', reverseController);

var port = process.env.PORT || 3000;
app.listen(port);
