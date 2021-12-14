const mongoose = require('mongoose')

const schema = mongoose.Schema({
	
	name: String,
	email: String,
	age: String,
	address: String,
	password: String,
})

module.exports = mongoose.model('User', schema)