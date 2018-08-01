//decorator for method by bblu @ 2018-08-01

function readonly(target, name, descriptor){
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor origin values{');
    console.log('    value:', descriptor.value);
    console.log('    enumerable:', descriptor.enumerable);
    console.log('    configurable:', descriptor.configurable);
    console.log('    writable:', descriptor.writable, '}');
    descriptor.writable = false;
    return descriptor;
}

class Person{
    constructor(first,last){
        this.first = first;
        this.last = last;
    }
    @readonly
    name(){
        return `${this.first} ${this.last}`;
    }
}

let p = new Person('lu','bb');
console.log(p.name);
