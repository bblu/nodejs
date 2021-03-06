var EventEmitter  = require('events').EventEmitter;

function MusicPlayer(track){
    this.track = track;
    this.playing = false;
    for(var methodName in EventEmitter.prototype){
        this[methodName] = EventEmitter.prototype[methodName];
    }
}

MusicPlayer.prototype = {
    toString: function(){
        if(this.playing){
            return 'Now playing: ' + this.track; 
        } else {
            return 'stipped';
        }
    }
};

var mPlayer = new MusicPlayer('Girl Talk - Still Here');


mPlayer.on('play',function(track){
    this.playing = true;
    console.log(this.toString());
});

mPlayer.emit('play', 'The Roots');

