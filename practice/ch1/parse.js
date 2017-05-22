//parse json by bblu
//
var json = '{"user":{"account":"bblu"}}';
var obj = {user:{account:'bblu'}}
var body = JSON.parse(json);

console.log('json', body);

console.log('obj:', obj);
