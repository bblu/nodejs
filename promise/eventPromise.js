var events=require('events');
var util=require('util');

var Promise = function(){
	events.Eventemitter.call(this);
}

util.inherits(Promise,events.Eventemitter);

Promise.prototype.then = function(fulfilledHandler, errorHandler, progressHandler){
	if(typeof fulfilledHandler === 'function'){
		this.once('success', fulfilledHandler);
	}
	if(typeof errorHandler ==='function'){
		this.once('error',errorHandler);
	}
	if(typeof progressHandler == 'function'){
		this.on('progress',progressHandler);
	}
	return this;
};

var Deferred = function(){
	this.state = 'unfulfilled';
	this.promise = new Promise();
};

Deferred.prototype.resolve = function(obj){
	this.state = 'fulfilled';
	this.promise.emit('sucess',obj);
};

Deferred.prototype.reject = function(err){
	this.state = 'failed';
	this.promise.emit('error',err)
};

Deferred.prototype.progress = function(dat){
	this.promise.emit('progress',dat);
};

var promisify = function(res){
	var deferred = new Deferred();
	var result = '';
	res.on('data', function(chunk){
		result += chunk;
		deferred.progress(chunk);
	});

	res.on('end', function(){
		//Done
		deferred.resolve(result);
	});

	res.on('error',function(err){
		//Error
		deferred.reject(err);
	});
	return deferred.promise;
};

promisify(res).then(function(){
	//Done
}, function(err){
	//Error
},function(chunk){
	console.log('BODY:' + chunk);
});