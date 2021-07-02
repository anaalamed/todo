// ----------------------------------------------
// ------ need to MODULE to different files -----
// ----------------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();
app.use(cors());
app.use(json());


//  mongoose schema
const ObjectId = mongoose.Schema.ObjectId;
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: () => false
    },
    // user: {
    //     type: ObjectId,
    //     ref: 'user',
    //     required: true,
    //     index: true // save list of todos of each user. faster search in db  
    // },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});
 const Todo = mongoose.model('Todo', TodoSchema);


 // mongoose connection
mongoose.connect('mongodb+srv://someone:Z5IFlN3WQosXxkDD@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
	useCreateIndex: true
})
.then(() => {
    console.log("MongoDB connected...");
console.log("Running on: http://localhost:7000/api/todos")
});




// routes
app.get('/api/todos', (req, res) => {
	Todo.find({ })
	.then((data) => {
		res.json(data);
	})
	.catch((error) => {
		console.log('error: ', error);
	})
});

app.post('/api/todos', (req, res) => {
	const todo = { title: req.body.title, id: Date.now(), completed: false };
    Todo.create(todo);
	res.json({message: 'todo added successfuly'});
});

app.patch('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const completed = Boolean(req.body.completed);

	const todo = await Todo.findOne({_id:id});
	todo.completed = completed;
	await todo.save();
	res.json(todo);
});

app.delete('/api/todos/:id', async (req, res) => {
	const id = req.params.id;
	const todo = await Todo.deleteOne({_id:id});
	res.json({message: 'todo removed successfuly'});
});



const PORT = 7000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
