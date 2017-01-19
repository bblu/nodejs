var fs = require('fs');
var Q = require('q');
var Deferred = require('./eventPromise.js');

var readFile = function (file, encoding){
	var deferred = Q.defer();
	fs.readFile(file, encoding, deferred.makeNodeResolver());
	return deferred.promise;
}

var promise1 = readFile('myfile.txt', 'utf-8');
var promise2 = readFile('myfile2.txt', 'utf-8');
var deferred = new Deferred();
deferred.all([promise1,promise2]).then(function (results){
	//
	console.log('results.length = '+results.length);
},function(err){
	console.log(err);
});