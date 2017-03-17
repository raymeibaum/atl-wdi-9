const express = require('express');
const router = express.Router();
let todonts = require('../models/todonts.js');

router.get('/', (req, res) => {
  res.render('todonts/index', {
    todonts: todonts
  });
});

router.get('/new', (req, res) => {
  res.render('todonts/new');
});

router.post('/', (req, res) => {
  todonts.push({
    description: req.body.description,
    urgent: req.body.urgent
  });
  res.redirect('/todonts');
});

router.get('/:id', (req, res) => {
  res.render('todonts/show', {
    todont: todonts[req.params.id],
    id: req.params.id
  });
});

router.get('/:id/edit', (req, res) => {
  res.render('todonts/edit', {
    todont: todonts[req.params.id],
    id: req.params.id
  });
});

router.put('/:id', (req, res) => {
  let todontToEdit = todonts[req.params.id];

  todontToEdit.description = req.body.description;
  todontToEdit.urgent = req.body.urgent;

  res.redirect('/todonts');

});

router.delete('/:id', (req, res) => {
  todonts.splice(req.params.id, 1);
  res.redirect('/todonts')
})

module.exports = router;
