var connect = require('connect'); 
var serveStatic = require('serve-static');

//old verson for npm install connect@2.X.X
//connect.createServer(connect.static(__dirname)).listen(8080);
var app = connect();

app.use(serveStatic(__dirname));

app.listen(9090,function(err){
	console.log('app.listen 9090');
});
