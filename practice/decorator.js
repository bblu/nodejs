//《ES6 标准入门》-- bblu @ 2018
// ES6::ch19::Class 为了接近OOP语言的语法而引入的关键字 本质是function
// 跟 C++ 早期为了更OOP引入的Interface关键字是Class的宏定义简直如出一辙。

console.log('|----------------修饰符----------------------')
/* about experimentalDecorators warnings:
Create tsconfig.json file in the root directory of your project and include the following options.
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
Restart VSCode and you should not see any experimentalDecorators warnings anymore.
*/

//Decorator for class
function testable(isTestable){
    return function(target){
        console.log('target.isTestable =',isTestable);
        target.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {
}
MyTestableClass.isTestable;

@testable(false)
class UntestableClass {
}
UntestableClass.isTestable;

//Unexpected Token @ when using decorator
///Users/bblu/Downloads/node/nodejs/practice/newclass.js:198
//@testable(true)
//^
//SyntaxError: Invalid or unexpected token