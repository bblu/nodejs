#!/usr/local/bin/node

//typed by bblu @ 2016-08-30
//

var mime = require('mime');
var http = require('http');
var fs 	 = require('fs');
var path = require('path');
var chatServer = require('./lib/chat_server');

var cache = {};

function send404(res){
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.write('Error 404: resource not found.');
	res.end();
}

function sendFile(response, filePath, contents){
	response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
	response.end(contents);
}

function serverStatic(response, cache, absPath){
	if(cache[absPath]){
		sendFile(response, absPath, cache[absPath]);
	}else{
		fs.exists(absPath, function(exists){
			if(exists){
				fs.readFile(absPath, function(err, data){
					if(err){
						send404(response);
					}else{
						cache[absPath]=data;
						sendFile(response, absPath, data);
					}
				});
			}else{
				send404(response);
			}
		});
	}
}


var server = http.createServer(function(req,res){
	var filePath = false;
	if(req.url == '/'){
		filePath = 'public/index.html';
	}else{
		filePath = 'public' + req.url;
	}
	var absPath = './' + filePath;
	serverStatic(res, cache, absPath);
});

chatServer.listen(server);

server.listen(3000, function(){
	console.log('server listening on port 3000.');
});

