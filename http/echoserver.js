var net = require('net');

var server = net.createServer(function(socket){
	socket.on('connect',function(){
		console.log(socket.remotePort + ' connect');
	});
	socket.on('data', function(data){
		socket.write(data);
	});
});

console.log('server.listen(8000);');
server.listen(8000);

