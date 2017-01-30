var assert = require('assert');
var actual = square(2);
var expected = 4;

assert(actual, 'square() shoud have returned a value');
assert.equal(
    actual,expected,
    'square() did not calculate the correct value'
);

function square(number){
    return number * number;
}
