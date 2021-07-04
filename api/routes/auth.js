const {Router} = require('express');
const { json } = require('body-parser');
const {User} = require('../models/user'); // mongoose schema

const router = Router(); 

router.post('/api/user/signup', async (req, res) => {
    try {
        const {email, password, firstName, lastName, country} = req.body;
        const newUser = await User.create({email, password, firstName, lastName, country});
        res.json({message: 'sign up successfuly'});
    } catch {
        res.status(500).json({message: 'Could not sign up'});
    }
});

router.post('/api/user/signin', async (req, res) => {
    try {
        const {email, password} = req.body;
        const userFound = await User.findOne({email, password});
        res.json({
            _id: userFound._id,
            name: userFound.firstName
        })
    } catch {
        res.status(500).json({message: 'Could not login'});
    }
})

router.get('/api/users', (req, res) => {
	User.find({ })
	.then((data) => {
		res.json(data);
	})
	.catch((error) => {
		console.log('error: ', error);
	})
});

module.exports = router;
