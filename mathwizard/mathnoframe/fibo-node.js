var htutil = require('./htutil.js');
exports.get = function(req, res){
    res.writeHeader(200, {
        'Content-Type':'text/html'
    });

    res.end(
        htutil.page("Fibonacci", htutil.navbar(),
            [(!isNaN(req.a) ? 
                ("<p class='result'>{a} fibonacci = {fibo}</p>"
                    .replace("{a}", Math.floor(req.a))
                    .replace("{fibo}",  math.fibonacci(Math.floor(req.a)))
                        :""),
                "<p>Enter numbers to see its fibonacci</p>",
                "<form name='fibonacci' action='/fibonacci' method='get'>",
                "A: <input type='text' name='a'/>",
                "<input type='submit' value='Submit'/>",
                "</form>"].join('\n'))
    );
}
