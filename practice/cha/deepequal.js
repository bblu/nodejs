var assert = require('assert');
var actual = login('Alex');
var expected = new User('Alex');

assert.deepEqual(actual, expected, 'The user state was not correct');

function User(name){
    this.name = name;
    this.permissions = {
        admin: false
    };
}

function login(name){
    var user = new User(name);
    user.permissions.admin = true;
    return user;
};
