const express = require('express');
const router = express.Router();
var recipes = require('../models/recipes.js');

router.get('/', (req, res) => {
  res.render('recipes/index.hbs', {
    recipes: recipes
  });
});

router.post('/', (req, res) => {
  recipes.push({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    veggie: req.body.veggie
  });
  res.redirect('/recipes/');
});

router.get('/new', (req, res) => {
  res.render('recipes/new.hbs');
});

router.get('/:id', (req, res) => {
  res.render('recipes/one.hbs', {
    recipe: recipes[req.params.id]
  });
});

module.exports = router;
