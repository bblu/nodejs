var http = require('http');
var fs = require('fs');

console.log(__dirname);
console.log('httpServer listen 8000');
http.createServer(function(req, res){
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(8000);
