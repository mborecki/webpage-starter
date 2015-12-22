var express = require('express');
var apiRouter = require('./api/router.js');
var pageRouter = require('./page/router.js');

var CONFIG = require('./config.json');

var app = express();
var server = null;

var PORT = CONFIG.SERVER_PORT;

app.use(function(req, res, next){
    console.log('REQUEST: [' + req.method + '] ' + req.path);
    next();
});

app.use('/api', apiRouter);
app.use(pageRouter);

app.listen(PORT, function(){
    console.log('Server started on: ' + PORT);
});
