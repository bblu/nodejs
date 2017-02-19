var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.bodyParser());
app.listen(port);

console.log('imooc started at port ' + port);

//index page
app.get('/',function(req, res){
    res.render('index',{title:'imooc 首页',
    movies:[
        {title:'t1',_id:1,year:2009,doctor:'a' },
        {title:'t2',_id:2,year:2009,doctor:'b' },
        {title:'t3',_id:3,year:2009,doctor:'dc'},
        {title:'t4',_id:4,year:2009,doctor:'dd'}
    ]
    });
});

app.get('/movie/:id',function(req, res){
    res.render('detail',{title:'imooc detail'});
});
app.get('/admin',function(req, res){
    res.render('admin',{title:'imooc admin'});
});
app.get('/list',function(req, res){
    res.render('list',{title:'imooc list'});
});
