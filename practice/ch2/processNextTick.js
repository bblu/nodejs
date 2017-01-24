var EventEmitter = require('events').EventEmitter;

function complexOperations(){
    var events = new EventEmitter();
    process.nextTick(function(){
        events.emit('sucess');
    });
    return events;
}

complexOperations().on('sucess', function(){
    console.log('sucess!');
});
