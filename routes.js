const express = require("express")
const User = require('./models/User') // new
const router = express.Router()


router.get('/users', async (req, res) => {
	const users = await User.find()
	res.send(users)
})

router.post('/users', (req, res) => {
	
	const user = new User({
		name: req.body.name,
		email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        password: req.body.password,

	})
	console.log(user)
	user.save()
	
	res.send(user)
})

router.post('/login', (req, res) => {
	
	const user = new User({
		name: req.body.name,
		email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        password: req.body.password,

	})
	console.log(user)
	console.log(user)
	res.send(user).json
})
module.exports = router