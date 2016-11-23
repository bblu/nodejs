var htutil = require('./htutil.js');

exports.get = function(req, res){
    res.writeHeader(200, {'Content-Type':'text/html'});
    res.write(
    htutil.page("Math Wizard",htutil.navbar(),"<p>Math Wizard</p>")
    );
    res.end();
}
