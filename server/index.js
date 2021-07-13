const express = require('express');
const path = require('path');
const cors = require('cors');
const { json } = require('body-parser');
const colors = require('colors'); // colors on console.log 

const routerTodo = require('./routes/todos'); // routes
const routerAuth = require('./routes/auth'); // routes
const {connect} = require('./mongo-db'); // mongoose connection


 // -------------------------------------------------------------------------
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
connect(process.env.MONGODB_URI || 'mongodb+srv://someone:Z5IFlN3WQosXxkDD@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();
  app.use(json()); 
  app.use(cors()); // go from port to port 
  app.use(routerTodo); // all endpoints from routes 
  app.use(routerAuth); // all endpoints from routes 


  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });


  const port = process.env.PORT || 7000; 
  app.listen(port,() =>  {
      console.log(`Running on: http://localhost:${port}`.green.bold);
  });

}

// -----------------------------------------------------------------
// mongoose connection to DB 
// connect(process.env.MONGODB_URI || 'mongodb+srv://someone:Z5IFlN3WQosXxkDD@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

// const app = express();
// app.use(json()); 
// app.use(cors()); // go from port to port 
// app.use(routerTodo); // all endpoints from routes 
// app.use(routerAuth); // all endpoints from routes 


// app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });


// const port = process.env.PORT || 7000; 
// app.listen(port,() =>  {
//     console.log(`Running on: http://localhost:${port}`.green.bold);
// });
    
