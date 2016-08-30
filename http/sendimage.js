var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
	fs.createReadStream('./hongloumeng.gif').pipe(res);
}).listen(3000);

console.log('listen at 3000\n');
