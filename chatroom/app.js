//typed by bblu @ 2016-08-30
//

var server = http.createServer(function(req,res){
	var filePath = false;
	if(req.url == '/'){
		filePath = 'public/index.html';
	}else{
		filePath = 'public' + req.url;
	}
	var absPath = './' + filePath;
	serveStatic(res, chche, absPath);
});


server.listen(3000, function(){
	console.log('server listening on port 3000.');
});


