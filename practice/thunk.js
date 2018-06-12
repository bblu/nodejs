//call by name : Haskell
//call by value: C

function f(m){
    return m * 2;
}
let x = 2;
console.log(`f(x + 5) = ${f(x + 5)}`);
//等同于
//编译器的call by name的实现往往是将参数放到一个临时函数中去
//这个临时函数就叫 thunk函数（形式-实际转换函数）
var thunk = function(){
    return x + 5;
}

function ft(thunk){
    return thunk() * 2;
}
 
console.log('ft(thunk)=',ft(thunk));

