const mongoose = require('mongoose');

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

 module.exports = Todo;