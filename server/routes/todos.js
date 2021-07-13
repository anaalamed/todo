const {Router} = require('express');
const { json } = require('body-parser');
const Todo = require('../models/todo'); // mongoose schema
const {checkUsersHeaders, checkExistingUser} = require('../middlewares/auth');

const router = Router(); 

router.get('/api/todos', checkUsersHeaders, checkExistingUser, (req, res) => {
	const id = req.user._id;
	Todo.find({user: id})
	.then((data) => {
		res.json(data);
	})
	.catch((error) => {
		console.log('error: ', error);
	})
});

router.post('/api/todos', async (req, res) => {
	const title = req.body.title;
	const user = req.body.user;
    const newTodo = await Todo.create({title: title, user: user, completed: false});
	res.json(newTodo);
});

router.patch('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const completed = Boolean(req.body.completed);

	const todo = await Todo.findOne({_id:id});
	todo.completed = completed;
	await todo.save();
	res.json({message: 'todo updated successfuly'});
});

router.put('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const title = req.body.title;

	const todo = await Todo.findOne({_id:id});
	todo.title = title;
	await todo.save();
	res.json({message: 'todo updated successfuly'});
});

router.delete('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const todo = await Todo.deleteOne({_id:id});
	res.json({message: 'todo removed successfuly'});
});

module.exports = router;