var assert = require('assert');
assert.match = match;

function match(actual, regex, message){
    if(!actual.match(regex)){
        assert.fail(actual, regex, message, 'match', assert.match);
    }
}

assert.match('{name: "Alex" }', /Alex/, 'The name should be Alex');

assert.throws(
    function(){
        assert.match('{name: "Alex" }', 
        /xlex/, 
        'this should fail');
    },
    assert.AssertionError,
    'A non-matching regex should throw an AssertionError'
);

