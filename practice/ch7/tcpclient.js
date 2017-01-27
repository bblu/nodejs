var assert = require('assert');
var net = require('net');
var clients = 0;
var expectedAssertions = 2;

function runTest(expectedId, done){
    var client = net.connect(8000);
    client.on('data', function(data){
        var expected = 'Welcome client: ' + expectedId + '\r\n';
        assert.equal(data.toString(), expected);
        expectedAssertions--;
        client.end();
    });

    client.on('end', done);
}
runTest(expectedAssertions, function(){};
