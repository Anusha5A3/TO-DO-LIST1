const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/', todoController.getAllTodos);


router.post('/add', todoController.addTodo);


router.get('/delete/:id', todoController.deleteTodo);


router.post('/edit/:id', todoController.editTodo);

module.exports = router;
