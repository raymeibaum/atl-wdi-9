var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var word = req.query.word;
  res.render('reversed', {
    word: word,
    reversedWord: word.split("").reverse().join("")
  })
})

module.exports = router;
