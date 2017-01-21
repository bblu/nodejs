var assert = require('assert');
var CountStream = require('./countstream');
var fs = require('fs');
var exStream = new CountStream('example');
var passed = 0;

exStream.on('total',function(count){
    assert.equal(count,1);
    passed++;
});

fs.createReadStream(__filename).pipe(exStream);

process.on('exit', function(){
    console.log('Assertions passed:', passed);
});

