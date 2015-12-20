var express = require('express');
var apiRouter = require('./api/router.js');
var pageRouter = require('./page/router.js');

var app = express();
var server = null;

var PORT = 8080;

app.use(function(req, res, next){
console.log('REQUEST: [' + req.method + '] ' + req.path);
next();
})

app.use('/api', apiRouter);
app.use(pageRouter);

app.listen(PORT);
