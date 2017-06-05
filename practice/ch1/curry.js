var add = function(x){
    return function(y){
        return x + y;
    }
}


var increment = add(1);
var addTen = add(10);

console.log('increment 2:' + increment(2));
console.log('2 addTen:' + addTen(2));

let getChildren = function(x){
    return x.childNodes;
}

//const allTheChildren = map(getChildren);
let root = ['a','b']
//let children = allTheChildren(root);
//console.log(children);