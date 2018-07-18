const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const user = require('./config'); 
const dbName = 'mongo_test';
const url = 'mongodb://dbuser:dbpassword1@ds137661.mlab.com:37661';
const uri = `${url}/${dbName}`;
const opt = { useNewUrlParser: true };

// Use connect method to connect to the server
MongoClient.connect(uri, opt, function(err, db) {
  assert.equal(null, err);
  //if(err) return console.log(err);
  if(client.isConnected()) console.log("Connected successfully to server");

  const db = client.db;
  const collection = db.collection('todo');
  

  client.close();
});


//MongoClient.connect(`mongodb://${user.name}:{${user.pswd}}@${user.dbUri}`, 
MongoClient.connect(uri, opt, (err,client)=>{
    if(err) return console.log(err);
    const db = client.db;
    var todoColl = db.collection('todo');
    todoColl.find({name:'walk'}).toArray((err,docs)=>{
        if(err) return console.log(err);
        console.log(docs);
    });
    let todo = {
        name:'run',
        priority:5
    };

    db.collection('todo').insert(todo,(err,ret)=>{
        if(err) return console.log(err);
        console.log('save todo to db');
    }) 
});