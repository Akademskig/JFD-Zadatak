var express = require('express');
var app = express();
var path = require('path');
var stylus = require('stylus');

var html = path.join(__dirname, 'templates/index.html')
var styles = path.join(__dirname, './static');

app.use(stylus.middleware(styles));
app.get(app.use(express.static(styles)));

app.get('/', function(req,res){
    res.sendFile(html);
})

app.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port ' + process.env.PORT);
});