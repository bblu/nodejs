//class test from javascript 高级编程

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends=['cc'];
}

Person.prototype = {
    constructor : Person,
    sayName : function(){
        console.log(this.name);
    }
}

var p1 = new Person('bblu', 35, 'Engineer');
var p2 = new Person('wblu', 25, 'soft');

p1.friends.push('van');
console.log(p1.friends);
console.log(p2.friends);




