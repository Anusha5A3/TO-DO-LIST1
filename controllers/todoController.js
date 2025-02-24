const Todo = require("../models/Todo");


exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).send('Error fetching todos');
    }
};


exports.addTodo = async (req, res) => {
    try {
        const newTodo = new Todo({ task: req.body.task });
        await newTodo.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error adding todo:', err);
        res.status(500).send('Error adding todo');
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting todo:', err);
        res.status(500).send('Error deleting todo');
    }
};


exports.editTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, { task: req.body.task });
        res.redirect('/');
    } catch (err) {
        console.error('Error editing todo:', err);
        res.status(500).send('Error editing todo');
    }
};
