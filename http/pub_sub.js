var events = require('events');
var net = require('net');
var channel = new events.EventEmitter();

channel.clients ={};
channel.subscriptions = {};

channel.on('join', function(id, client){
	this.clients[id] = client;
	console.log('channel.on(join),(id, client)= ' + id +',' + client);

	this.subscriptions[id] = function(senderId, message){
		if(id != senderId){
			console.log(senderId + ' broadcast to ' + id);
			this.clients[id].write(message);
		}
	}
	console.log(client + ' has joined');
	this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function(client){
	var id = client.remoteAddress + ':' + client.remotePort;
	console.log('net.createServer for cleint: '+ id);
	//********** book is wrong client.on('connect'...) **********
	client.on('connection', function(socket){
			console.log('channel.emit(join, id, client)');
			channel.emit('join', id, client);
	});
	client.on('data', function(data){
		data = data.toString();
		console.log('channel.emit(broadcast) port='+ 
				client.remotePort + ' data=' + data);
		channel.emit('broadcast', id, data);
	});
});

server.listen(8888,function(){
	console.log('server is listen to 8888');
});
