var assert = require('assert');
var fs = require('fs');

function readConfigFile(cb){
    fs.readFile('config.cfg',function(err, data){
        if(err && err.code === 'ENOENT'){
            cb(null, {database: 'psql://localhost/test'});
        }else if(err) {
            cb(err);
        }else{
            //Do important configuration stuff
            cb(null,data);
        }
    });
}

readConfigFile(function(err, data){
    assert.ifError(err);
    console.log(err, data);
} );
