const express = require('express');
const path = require('path');
const cors = require('cors');
const { json } = require('body-parser');
const colors = require('colors'); // colors on console.log 
// import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';


const routerTodo = require('./routes/todos'); // routes
const routerAuth = require('./routes/auth'); // routes
const {connect} = require('./mongo-db'); // mongoose connection
// require('../')


// mongoose connection to DB 
connect(process.env.MONGODB_URI || 'mongodb+srv://someone:Z5IFlN3WQosXxkDD@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const app = express();
app.use(json()); 
app.use(cors()); // go from port to port 
app.use(routerTodo); // all endpoints from routes 
app.use(routerAuth); // all endpoints from routes 


// app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname+'/../client/build/index.html'));
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


const port = process.env.PORT || 7000; 
app.listen(port,() =>  {
    console.log(`Running on: http://localhost:${port}/api/todos`.green.bold);
});
    
