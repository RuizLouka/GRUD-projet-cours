const express = require('express');
const bodyParser = require('body-parser')
const mongoctl = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'users-api'

const connectionDB = mongoctl.connect(url, { useNewUrlParser: true }, (err, client) => {
  if(err) return console.log(err);
  db = client.db(dbName);
  console.log(`Connection Mongodb: ${url}`, `Database: ${dbName}`);
})

connectionDB.then(client => {
  // mettre ici la collection que l on veut utiliser
  const collection = db.collection('users')
  //mettre ici les requetes app.use / get / post ...etc
}).catch(console.error)

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => response.sendFile(__dirname + '/index.html'))

app.post('/register', (request, response) => console.log('enregistre'))

module.exports = app;