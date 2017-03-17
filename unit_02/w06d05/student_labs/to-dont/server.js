const express = require('express');
const app = express();

const hbs = require('hbs');
app.set('view engine', 'hbs');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const todontsController = require(__dirname + '/controllers/todonts_controller.js');
app.use('/todonts', todontsController);

const port = process.env.PORT || 3000;
app.listen(port, console.info(`Server listening on port: ${port}`));
