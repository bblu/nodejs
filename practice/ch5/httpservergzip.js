var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

console.log(__dirname);
console.log('httpServer listen 8000');
http.createServer(function(req, res){
    res.writeHead(200,{'content-encoding':'gzip'});
    fs.createReadStream(__dirname + '/index.html')
        .pipe(zlib.createGzip())
        .pipe(res);
}).listen(8000);
