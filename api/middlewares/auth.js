const {User} = require('../models/user');

function getUsers(id) {
    return User.findById(id);
}


// if there is userId
const checkUsersHeaders = (req, res, next) => {
    if(req.headers.user) {
        // req.userId = Number(req.headers.userid); // go to the next function. server use lower case always
        req.userId = req.headers.user; // go to the next function. server use lower case always
        next();
    } else {
        res.status(401).json({message: 'please provide user header'});
    }
};

// if there is user 
const checkExistingUser = (async (req, res, next) => {
    req.user = await getUsers(req.userId);
    if(req.user) {
        next();
    } else {
        res.status(401).json({message: 'User is not recognized'});
    }
});


module.exports = {
    checkUsersHeaders,
    checkExistingUser
}