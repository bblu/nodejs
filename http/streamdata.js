var fs = require('fs');

var stream = fs.createReadStream('./helloworld.js');
stream.on('data', function (chunk){
	console.log(chunk);
	console.log('\n--------new data------\n');
})

stream.on('end',function (){
	console.log('finished');
})

