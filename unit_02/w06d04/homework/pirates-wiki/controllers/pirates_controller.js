var express = require('express');
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', (req, res) => {
  res.render('pirates/index', {
    pirates: pirates
  })
});

router.post('/', (req, res) => {
  pirates.push({
    name: req.body.name,
    birthplace: req.body.birthplace,
	  death_year: req.body.death_year,
    base: req.body.base,
	  nickname: req.body.nickname
  });
  res.redirect('/pirates');
})

router.get('/new', (req, res) => {
  res.render('pirates/new');
})

router.get('/:id', (req, res) => {
  res.render('pirates/one', {
    pirate: pirates[req.params.id]
  })
});



module.exports = router;
