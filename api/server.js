const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const colors = require('colors'); // colors on console.log 

const routerTodo = require('./routes/todos'); // routes
const routerAuth = require('./routes/auth'); // routes

const {connect} = require('./mongo-db'); // mongoose connection
// const {User} = require('./models/user'); // mongoose schena

// mongoose connection to DB 
connect(process.env.MONGODB_URI || 'mongodb+srv://someone:Z5IFlN3WQosXxkDD@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then( () => {
    console.log("MongoDB connected...");
})
    .catch ( () => {
    console.log('MONGODB is not connected');
    process.exit(1);
})

const app = express();
app.use(json()); 
app.use(cors()); // go from port to port 
app.use(routerTodo); // all endpoints from routes 
app.use(routerAuth); // all endpoints from routes 

app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})


const port = process.env.PORT || 7000; 
app.listen(port,() =>  {
    console.log(`Running on: http://localhost:${port}/api/todos`.green.bold);
});
    
