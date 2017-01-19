var fs = require('fs');
var Q = require('q');


var readFile = function (file, encoding){
	var deferred = Q.defer();
	fs.readFile(file, encoding, deferred.makeNodeResolver());
	return deferred.promise;
}

readFile('myfile.txt','utf-8').then(function (data){
	console.log(data);
}, function(err){
	console.log(err);
});