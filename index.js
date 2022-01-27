const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://sujin:dream1225@techiejob-shard-00-00.uw75x.mongodb.net:27017,techiejob-shard-00-01.uw75x.mongodb.net:27017,techiejob-shard-00-02.uw75x.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-l756sp-shard-0&authSource=admin&retryWrites=true&w=majority';
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//  client.close();
//});


mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {console.log("mongodb connected")}).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hi'));

app.listen(port, () => console.log(`Listening on port ${port}`));