var assert = require('assert');
var net = require('net');
var clients = 0;
var expectedAssertions = 2;
var expectedId = 1;
var client = net.connect(8000);
client.on('data', function(data){
    console.log(data.toString());
    expectedAssertions--;
    client.end();
});
client.on('end', function(){
    console.log('over');
});

