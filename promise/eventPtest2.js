
var promisify = new Promisify()

	var deferred = new Deferred();
	var result = '';
	res.then(function(){
		//Done
	}, function(err){
		//Error
	}, function(chunk){
		console.log('BODY:' + chunk);
	});
	return 
