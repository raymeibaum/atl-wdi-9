const express = require('express');
const router = express.Router();

router.get('/topping/:type', (req, res) => {
res.render('topping', {
    topping: req.params.type
  })
});

router.get('/order/:amount/:size', (req, res) => {
  res.render('order', {
    amount: req.params.amount,
    size: req.params.size
  })
});

router.get('/pizza', (req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = router;
