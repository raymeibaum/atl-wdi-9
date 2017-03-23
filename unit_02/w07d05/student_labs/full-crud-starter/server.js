// Standard stuff
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const hbs = require('hbs');
app.set('view engine', 'hbs');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersController = require("./controllers/usersController.js");
app.use('/users', usersController);

const itemsController = require("./controllers/itemsController.js");
app.use('/users/:userId/items', itemsController);

const projectIdeasController = require("./controllers/projectIdeasController.js");
app.use('/users/:userId/project-ideas', projectIdeasController);

// Mongoose stuff
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

// Now that we're connected, let's save that connection to the database in a constiable.
const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
