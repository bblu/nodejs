var assert = require('assert');
var util = require('util');

assert.throws(
    function(){
        loginAdmin('Alex');
    },PermissionError,
    'A PermissionError was expected'
);

function PermissionError(){
    Error.call(this, arguments);
}

util.inherits(PermissionError, Error);

function User(name){
    this.name = name;
    this.permission = {admin: false};
}

function loginAdmin(name){
    var user = new User(name);
    if(!user.permission.admin){
        console.log('not admin');
        throw new PermissionError('You are not an administrator');
    }else{
        console.log('is admin');
    }
    return user;
}

