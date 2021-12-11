console.log('Initiating Connection with MongoDB');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://wajeehaMalik452:Seamzo2021@cluster0.yatvu.mongodb.net/myFinorstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Connected Successfully');
  // perform actions on the collection object
  client.close();
});