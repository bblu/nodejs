var CountStream = require('./countstream.js');
var bkStream = new CountStream('te');
var http = require('http');

http.get('http://www.manning.com',function(res){
    res.pipe(bkStream);
});

bkStream.on('total', function(count){
    console.log('Total matches:',count);
});

