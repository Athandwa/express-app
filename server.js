var express = require('express');
var app = express();

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});

//creat new route
app.get('/hello', function (req, res) {
 res.send('Hello Codex!');
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
