console.log('Initiating Connection with MongoDB');

const { MongoClient } = require('mongodb');
const { Mongoose } = require('mongoose');


const { applyMiddleware } = require('redux');





const client = new MongoClient(conn_uri, { 
  useCreateIndex: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Connected Successfully');
  // perform actions on the collection object
  client.close();
});



Mongoose.connection.once("open", () => {
  console.log("DB connected");
}) 


// Api routes

app.get("/", (req,res) => res.status(200).send("Hello World"));

app.post("/upload", (req, res) => {
   
});


// listen
app.listen(port, () => console.log ('Listening on localhost: ${port}'));
