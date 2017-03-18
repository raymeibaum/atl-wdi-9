const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const logger = require('morgan');
app.use(logger('dev'));

const hbs = require('hbs');
app.set('view engine', 'hbs');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));

const pokemonController = require(__dirname + '/controllers/pokemon.js');
app.use('/pokemon', pokemonController);

app.get('/', (req, res) => {
  res.redirect('/pokemon');
});

const port = process.env.PORT || 3000;
app.listen(port, console.info(`Server listening at port: ${port}.`));
