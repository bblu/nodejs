var cp = require('child_process');

console.log('>execFile Test');
cp.execFile('echo', ['helo', 'world', 'execfile'],
    function(err, stdout, stderr){
        if(err) conole.log(err);
        console.log('stdout', stdout);
        console.log('stderr', stderr);
    });


console.log('>spawn Test');
var child =  cp.spawn('echo', ['helo', 'world', 'spawn']);
child.on('error', console.error);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
