//npm install q
res.setEncoding('utf8');
res.on('data', function(chunk){
	console.log('BODY:' + chunk);
});

res.on('end', function(){
	//Done
});

res.on('error',function(err){
	//Error
});

