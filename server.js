const express = require ('express');
const app = express();
const mongoose = require ('mongoose');

const mongoUri = 'mongodb+srv://wajeehaMalik452:Seamzo2021@cluster0.yatvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect (mongoUri);

mongoose.connection.on ('connected', () => {
  console.error('Connected to mongo instance', err);
});


mongoose.connection.on ('error', (err) => {
  console.error('Error connecting to mongo', err);
});