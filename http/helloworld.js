var http = require('http');


http.createServer(function (req, res){
	//res.wirteHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World\n');
}).listen(3000);

var server = http.createServer();
server.on('request', function (req, res){
	res.end('Hello Nodejs\n');
}).listen(3001);

console.log('server running at 3000 port');
