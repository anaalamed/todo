const {Router} = require('express');
const { json } = require('body-parser');
const Todo = require('../models/todo'); // mongoose schema

const router = Router(); 

router.get('/api/todos', (req, res) => {
	Todo.find({ })
	.then((data) => {
		res.json(data);
	})
	.catch((error) => {
		console.log('error: ', error);
	})
});

router.post('/api/todos', (req, res) => {
	const todo = { title: req.body.title, id: Date.now(), completed: false };
    Todo.create(todo);
	res.json({message: 'todo added successfuly'});
});

router.patch('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const completed = Boolean(req.body.completed);

	const todo = await Todo.findOne({_id:id});
	todo.completed = completed;
	await todo.save();
	res.json(todo);
});

router.delete('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const todo = await Todo.deleteOne({_id:id});
	res.json({message: 'todo removed successfuly'});
});

module.exports = router;