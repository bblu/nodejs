function MyClass(){
}

MyClass.prototype = {
    method: function(){
        return 'Hello from MyClass';
    }
};

module.exports = new MyClass();
