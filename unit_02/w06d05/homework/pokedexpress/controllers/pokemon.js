const express = require('express');
const router = express.Router();
const pokemon = require('../models/poke_array.js')

router.get('/', (req, res) => {
  res.render('pokemon/index.hbs', {
    pokemon: pokemon
  });
});

router.post('/', (req, res) => {
  pokemon.push({
    id: req.body.id,
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(' '),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      speed: req.body.speed,
    },
    misc: {
      classification: req.body.classification
    }
  });
  res.redirect(`/pokemon/${pokemon.length - 1}`);
});

router.get('/new', (req, res) => {
  res.render('pokemon/new.hbs');
});

router.get('/:id', (req, res) => {
  res.render('pokemon/show.hbs', {
    pokemon: pokemon[req.params.id],
    id: req.params.id
  });
});

router.put('/:id', (req, res) => {
  let selectedPokemon = pokemon[req.params.id];

  selectedPokemon.id = req.body.id;
  selectedPokemon.name = req.body.name;
  selectedPokemon.type = req.body.type.split(' ');
  selectedPokemon.stats.hp = req.body.hp;
  selectedPokemon.stats.attack = req.body.attack;
  selectedPokemon.stats.defense = req.body.defense;
  selectedPokemon.stats.speed = req.body.speed;

  res.redirect(`/pokemon/${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon');
});

router.get('/:id/edit', (req, res) => {
  res.render('pokemon/edit.hbs', {
    pokemon: pokemon[req.params.id],
    id: req.params.id
  });
});

module.exports = router;
