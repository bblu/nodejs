
var p1 = new Promise(function (resolve, reject) {
    resolve('one');
});

var p2ok = new Promise(function (resolve, reject) {
	resolve('two');
});
var p2 = new Promise(function (resolve, reject) {
    reject('two was rejected');
});

var p3 = new Promise(function (resolve, reject) {
    resolve('three');
});

Promise.all([p1, p2ok, p3])
.then(function(res){
    console.log('Promise.all', res);
})
.catch(function(err){
    console.error('Promise.err', err); 
});
//Promise.all [ 'one', 'two', 'three' ]

Promise.all([p3, p1])
.then(function(res){
    console.log('Promise.all', res);
})
.catch(function(err){
    console.error('Promise.err', err); 
});

Promise.all([p1, p2, p3])
.then(function(res){
    console.log('Promise.all', res);
})
.catch(function(err){
    console.error('Promise.err', err); 
});

//Promise.all error two was rejected

var ret = {};
var pr1 = new Promise(function (resolve, reject) {
	ret['r1']=1;
	resolve(ret);
});

var pr2 = new Promise(function (resolve, reject) {
	ret['r2']=2;
	resolve(ret);
});

Promise.all([pr1, pr2])
.then(function(res){
	console.log('Promise.all', res[0]);
	console.log('Promise.all', res);
	console.log('object ret=',ret);
})
.catch(function(err){
    console.error('Promise.err', err); 
});

/*
macbook:promise bblu$ node all.js
Promise.all [ 'one', 'two', 'three' ]
Promise.all [ 'three', 'one' ]
Promise.all { r1: 1, r2: 2 }
Promise.all [ { r1: 1, r2: 2 }, { r1: 1, r2: 2 } ]
object ret= { r1: 1, r2: 2 }
Promise.err two was rejected
*/

function Connection(base){
    this.base = base;
    this.collections = {};
}

Object.defineProperty(Connection.prototype, 'host', {
    configurable: true,
    enumerable: true,
    writable: true
  });

Object.defineProperty(Connection.prototype, 'readyState', {
    get: function() {
      return this._readyState;
    },
    set: function(val) {
      if (!(val in STATES)) {
        throw new Error('Invalid connection state: ' + val);
      }
  
      if (this._readyState !== val) {
        this._readyState = val;
        }
    }
});

Connection.prototype.openUri = function(uri, options, callback) {
    const _this = this;
    const promise = new Promise((resolve, reject) => {
        console.log('openUri.promise');
        resolve(_this);
    });
    this.$initialConnection = Promise.all([promise, pr2]).
    then(res => res[0]).
    catch(err => {
      if (this.listeners('error').length > 0) {
        process.nextTick(() => this.emit('error', err));
        return;
      }
      throw err;
    });
    this.then = function(resolve, reject) {
        console.log('Connection.then');
        return this.$initialConnection.then(resolve, reject);
    };
    this.catch = function(reject) {
        console.log('Connection.catch');
        return this.$initialConnection.catch(reject);
    };
    
    if (callback != null) {
        this.$initialConnection.then(
          () => callback(null, this),
          err => callback(err)
        );
    }
    return this;
}

var conn = new Connection('mongo');
conn.openUri('uri').then((cnn)=>{
     return console.log(cnn);
});