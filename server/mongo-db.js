const mongoose = require('mongoose');

function connect(mongoURI) {
     mongoose.connect(mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then( () => {
        console.log("MongoDB connected...");
    })
        .catch ( () => {
        console.log('MONGODB is not connected');
        process.exit(1);
    });
}

module.exports= {connect};