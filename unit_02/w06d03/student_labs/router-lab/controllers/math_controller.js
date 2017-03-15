var express = require('express');
var router = express.Router();

router.get('/:operator', function(req, res) {
  var result;
  switch (req.params.operator) {
    case 'add':
      result = parseInt(req.query.num1) + parseInt(req.query.num2);
      break;
    case 'subtract':
      result = parseInt(req.query.num1) - parseInt(req.query.num2);
      break;
    case 'multiply':
      result = parseInt(req.query.num1) * parseInt(req.query.num2);
      break;
    case 'divide':
      result = parseInt(req.query.num1) / parseInt(req.query.num2);
      break;
    default:
      result: 'Invalid zebra';
  }

  res.render('math', {
    data: result
  });
});

module.exports = router;
