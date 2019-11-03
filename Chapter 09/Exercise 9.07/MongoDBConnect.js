const MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db('local');	// 'local' is default db in mongodb. Change it with the name of the db you want to connect.

  client.close();
});