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