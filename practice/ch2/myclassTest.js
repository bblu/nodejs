var MyClass = require('./myclass');
var MyClass2 = require('./myclass2');

console.log('typeof MyClass is ' + typeof(MyClass));
console.log('typeof MyClass.method is ' + typeof(MyClass.method));
console.log('MyClass return string is \'' + MyClass.method() + "'");

console.log(MyClass2.func1());
console.log(MyClass2.func2());
