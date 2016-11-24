var htutil = require('./htutil.js');
exports.get = function(req, res){
    res.writeHeader(200, {
        'Content-Type':'text/html'
    });

    res.end(
        htutil.page("Square", htutil.navbar(),
            [(!isNaN(req.a) ? 
                ("<p class='result'>{a} squared = {sq}</p>"
                    .replace("{a}", req.a)
                    .replace("{sq}", req.a * req.a)):""),
                "<p>Enter numbers to see its square</p>",
                "<form name='square' action='/square' method='get'>",
                "A: <input type='text' name='a'/>",
                "<input type='submit' value='Submit'/>",
                "</form>"].join('\n'))
    );
}
