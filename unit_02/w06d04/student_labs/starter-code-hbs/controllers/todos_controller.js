const express = require('express');
const router = express.Router();

let data = require('../data.js');

/* INDEX TODOS */
router.get('/', (req,res) => {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

router.get('/new', (req, res) => {
  res.render('todos/new');
});

router.post('/', (req, res) => {
  data.seededTodos.push({
    description: req.body.description,
    urgent: req.body.urgent
  });
  res.redirect('/todos');
});

router.get('/:id/edit', (req, res) => {
  res.render('todos/edit', {
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
  });
});

router.get('/:id', (req, res) => {
  if (data.seededTodos[req.params.id]) {
    res.render('todos/show', {
      todo: data.seededTodos[req.params.id]
    });
  } else {
    res.render('404');
  }
});

router.put('/:id', (req, res) => {
  let todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
});

router.delete('/:id', (req, res) => {
  data.seededTodos.splice(req.params.id, 1);

  res.redirect('/todos');
});

module.exports = router;
