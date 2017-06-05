let compose = function(f, g){
    return function(x){
        return f(g(x));
    }
}
let toUpper = function(x){
    return x.toUpperCase();
}
let exclaim = function(x){ return x + '!'};
let shout = compose(exclaim, toUpper);

console.log(shout('send in the clowns'));