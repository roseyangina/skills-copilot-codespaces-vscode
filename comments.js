// Create web server
Path: server.js
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000, function() {
    console.log('Listening on port 3000');
}
// Create a route

Path: index.html

