var express = require('express');

var router = express.Router();

router.get('/:name', function(req, res) {
  res.render('greeting', {
      zebra: req.params.name,
      data: req.query.greeting
    })
  })

module.exports = router;
