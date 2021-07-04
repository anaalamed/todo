const mongoose = require('mongoose');

function connect(mongoURI) {
    return mongoose.connect(mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports= {connect};