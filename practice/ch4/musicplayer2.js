var util = require('util');
var events = require('events');

var AudioDevice = {
    play:function(track){
        //stub: play...
        console.log('play music ...');
    },
    stop:function(){
        console.log('... music stop');
    }
};

function MusicPlayer(){
    this.playing = false;
    events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);

var mPlayer = new MusicPlayer();

mPlayer.on('play', function(track){
    this.playing = true;
    AudioDevice.play(track);
});

mPlayer.on('stop', function(track){
    this.playing = false;
    AudioDevice.stop(track);
});

mPlayer.emit('play', 'The Roots - The Fire');

setTimeout(function(){
    mPlayer.emit('stop');
},1000);
