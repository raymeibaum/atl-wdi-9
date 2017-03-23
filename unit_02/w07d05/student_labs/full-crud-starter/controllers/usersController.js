const express = require('express');
const router = express.Router();

const User = require("../models/user");
const Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
    .exec(function(err, users){
      if (err) { console.log(err); }
      res.render('users/index.hbs', {
        users: users
      });
    });
});

router.get('/new', function(req, res) {
  res.render('users/new.hbs');
})

// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('users/show.hbs', {
      user: user
    });
  });
});

// USER CREATE ROUTE
router.post('/', function(req, res){
  let user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    res.render('users/show.hbs', {
      user: user
    });
  });
});

router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    res.render('users/edit.hbs', {
      user: user
    });
  });
});

// USER UPDATE ROUTE
router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    res.render('users/show', {
      user: user
    });
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) { console.log(err) }
    res.redirect('/users/');
  });
});

module.exports = router;
