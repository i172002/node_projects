const fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    fs.readFile('demoHTML.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(9000);

var dateModule = require('./myFirstModule')