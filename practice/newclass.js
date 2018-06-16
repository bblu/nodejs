//ES6::ch19::Class 为了接近OOP语言的语法而引入的关键字 是function

function Point(x,y){
    this.x = x;
    this.y = y;
    function privateFoo(p){
        console.log('do somthing foo inside for '+ p);
    }
    function privateBar(){
        console.log('do somthing bar inside for '+ p);        
    }
    this.publicInterface = function(param){
        privateFoo(param);
        privateBar(param);
    }
}
Point.prototype.toString = function(){
    let str = `Point(${this.x},${this.y})`;
    return str;
};
//=用ES Class改写=>
class NewPoint{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //类方法既不需要function也不需要逗号分割
    //此处的格式可以参考原来function形式内部函数的写法格式上是一致的。
    toString(){
        return `NewPoint(${this.x},${this.y})`;
    }
    move(deltx,delty){
        let bp = this.toString();
        this.x += deltx;
        this.y += delty;
        console.log(`move ${bp} to ${this.toString()}`);
    }
}
let p = new Point(0,0);
console.log(p.toString());
p.publicInterface('whatyouwant');
let n = new NewPoint(1,1);
//(type of NewPoint is "function") => 类的数据类型是函数！
console.log(`type of NewPoint = ${typeof NewPoint}`);
console.log(`type of constructor = ${typeof NewPoint.prototype.constructor}`);
if(NewPoint === NewPoint.prototype.constructor){
    //NewPoint类本身指向构造函数，实际上类的所有方法都定义在prototype上
    console.log('NewPoint === NewPoint.prototype.constructor')
}else{
    console.log('NewPoint !== NewPoint.prototype.constructor')    
}

console.log(n.toString());
n.move(1,-1);


class MyClass{
    constructor(...args){
        this._args = args;
        this._name = args[0];
        MyClass._counter = (MyClass._counter===undefined ? 0 :MyClass._counter) + 1;
        this._age = NaN;
        console.log(`constructor for instance counter = ${MyClass._counter}`);
    }
    //静态方法需要从类调用，不能由实例发起；
    static getInstanceCount(){
        console.log(`MyClass Instance Count = ${this._counter}`);
        return MyClass._counter;
    }
    //私有方法

    * [Symbol.iterator](){
        for(let arg of this._args){
            yield arg;
        }
    }
    get name(){
        console.log(`[${MyClass._counter}] get name of ${this._name} `);
        return this._name;
    }
    set name(value){     
        console.log(`[${MyClass._counter}] set name to ${value}`);
        this._name = value;
    }
    /* 如果在set name中不小心写成this.name=value；会引发递归调用我的电脑调用4986次就溢出了
    [4986] set name to xixi
    console.js:116
        throw e;
        ^
    RangeError: Maximum call stack size exceeded*/
    get age(){
        console.log(`get age = ${this._age}`);
        return this._age;
    }
    set age(value){
        console.log(`set age to ${value}`);
        this._age = value;
    }
}

let instance = new MyClass('bblu');


let name = instance.name;
instance.name = 'xixi';
let newName = instance.name;

instance.age = 35;
const age = instance.age;

let someone = new MyClass('xixi',8);
let somename = someone.name;
someone.name = 'luxixi';

for(let x of someone){
    console.log(x);
}

let sometwo = new MyClass('cc',3);

let c = MyClass.getInstanceCount();