const express = require('express')
const router = express.Router();


// ADD A NEW ITEM
router.post('/', function(req, res){
  User.findById(req.params.userId)
  .exec(function(err, user){
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err){
      if (err) console.log(err);
      res.send(user);
    });
  });
});

// REMOVE AN ITEM
router.delete('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item){
    if (err) console.log(err);
    res.send(item + " Item deleted");
  });
});


module.exports = router;
