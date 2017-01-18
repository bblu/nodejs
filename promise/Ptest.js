//npm install q
var Q = require('q')
var fs_readFile = Q.denodify(fs.readFile)
var promise = fs_readFile('myfile.txt')
promise.then(console.log, console.error)