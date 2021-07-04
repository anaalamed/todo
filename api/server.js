const express = require('express');
const cors = require('cors');
const colors = require('colors'); // colors on console.log 

const router = require('./routes/todos'); // routes
const {connect} = require('./mongo-db'); // mongoose connection

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
app.use(cors()); // go from port to port 
app.use(router); // all endpoints from routes 

const port = process.env.PORT || 7000; 
app.listen(port,() =>  {
    console.log(`Running on: http://localhost:${port}/api/todos`.green.bold);
});
    
