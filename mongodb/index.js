const MongoClient = require('mongodb').MongoClient
const user = require('config').user; 
var db;

MongoClient.connect(`mongodb://admin:admin123@ds137661.mlab.com:37661/mongo_test`, (err,database)=>{
    if(err) return console.log(err);
    db = database;
    let todo = {
        id:1,
        name:''
    };
    db.collection('todo').save(todo,(err,ret)=>{
        if(err) return console.log(err);
        console.log('save todo to db');
    }) 
});