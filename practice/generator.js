//generator
//定义前的*表示生成器函数的与众不同
function* gen(x){
    var y = yield x+2;
    return y;
}

var g = gen(1);
console.log(g.next(3));
console.log(g.next(2));
console.log(g.next());
/*
第二个 next 方法带有参数2，这个参数可以传入 Generator 函数，
作为上个阶段异步任务的返回结果，被函数体内的变量 y 接收。
因此，这一步的 value 属性，返回的就是2（变量 y 的值）。
bblu@ThinkPad:~/repo/nodejs/practice$ node generator.js
{ value: 3, done: false }
{ value: 2, done: true }
怎么理解Generator参数被作为上阶段的返回结果？
就是重新指派了上一次yield表达式的返回值
*/

function * genNum(x){
    var y = yield x + 1;
    var z = yield y + 1;
    return z;
}

g = genNum(0);
console.log(g.next());
console.log(g.next(2));
console.log(g.next(3));

//ch17.5.4 co
//1.co函数接受Generator函数作为参数，返回Promise对象
//2.然后将Generator函数的内部指针对象的next方法包装成onFulFilled函数捕捉错误。
// fulfill your promise 履行你的诺言。
function co(gen){
    var ctx = this;
    return new Promist(function(resolve, reject){
        if(typeof gen === 'function'){
            console.log('gen = gen.call(ctx)')
            gen = gen.call(ctx);
        }
        if(!gen || typeof gen.next !== 'function'){
            console.log('return resolve(gen)');
            return resolve(gen);
        };
        onFulfilled();
        function onFulfilled(res){
            var ret;
            try{
                ret = gen.next(res);
            }catch(e){
                return reject(e);
            }
            next(ret);
        };
        //关键的next函数反复调用自身
        function next(ret){
            if(ret.done) return resolve(ret.value);
            var value = toPromise.call(ctx,ret.value);
            if(value && isPromise(value)){
                return value.then(onFulfilled,onRefected);
            }
            return onRejected(
                new TypeError(
                    'You may only yield a function, promise generator, array, or object,' +
                    'bu the following object was passed:"' +
                    String(ret.value)+'"'
                )
            );
        }
    });
}
