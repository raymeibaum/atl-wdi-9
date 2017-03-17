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
});

router.get('/new', (req, res) => {
  res.render('pirates/new');
});

router.get('/:id', (req, res) => {
  res.render('pirates/show', {
    pirate: pirates[req.params.id],
    id: req.params.id
  });
});

router.get('/:id/edit', (req, res) => {
  res.render('pirates/edit', {
    pirate: pirates[req.params.id],
    id: req.params.id
  });
})

router.put('/:id', (req, res) => {
  let pirateToChange = pirates[req.params.id];

  pirateToChange.name = req.body.name;
  pirateToChange.birthplace = req.body.birthplace;
  pirateToChange.death_year = req.body.death_year;
  pirateToChange.base = req.body.base;
  pirateToChange.nickname = req.body.nickname;

  res.redirect('/pirates');
});

router.delete('/:id', (req, res) => {
  pirates.splice(req.params.id, 1);
  res.redirect('/pirates');
})

module.exports = router;
