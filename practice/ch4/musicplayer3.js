var util = require('util');
var events = require('events');

var AudioDevice = {
    play:function(track){
        //stub: play...
        console.log('play :',track);
    },
    stop:function(){
        console.log('stop');
    }
};

function MusicPlayer(){
    this.playing = false;
    this.audioFirstStarted = new Date();
    events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);

var mPlayer = new MusicPlayer();

mPlayer.once('play',function(){
    this.audioFirstStarted = new Date();
    console.log('once play');
});
mPlayer.on('play', function(track){
    this.playing = true;
    AudioDevice.play(track);
    console.log('audioFirstStarted:',this.audioFirstStarted);
});

mPlayer.on('play',function(track){
    console.log('Track now playing :',track);
});
mPlayer.on('stop', function(track){
    this.playing = false;
    AudioDevice.stop(track);
});

mPlayer.emit('play', 'The Roots');
mPlayer.emit('play', 'The Fire');

setTimeout(function(){
    mPlayer.emit('stop');
},1000);
