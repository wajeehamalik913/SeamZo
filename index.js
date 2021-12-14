const express = require('express')
const mongoose = require('mongoose') // new
const routes = require('./routes')
const bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer();



// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://wajeehaMalik452:Seamzo2021@cluster0.yatvu.mongodb.net/SeamzDB?retryWrites=true&w=majoritymongodb+srv://wajeehaMalik452:Seamzo2021@cluster0.yatvu.mongodb.net/SeamzoDB?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json())
		app.use(express.urlencoded({ extended: true })); 
		// for parsing multipart/form-data
		app.use(upload.array()); 
		app.use(express.static('public'));
		//app.use(bodyParser.json())
		//app.use(bodyParser.urlencoded({extended: true}))

		app.use('/api', routes)
		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})