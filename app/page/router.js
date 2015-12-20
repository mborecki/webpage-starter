var express = require('express');
var router = express.Router();
var fs = require('fs');

module.exports = (function(){

    //assets
    router.get(new RegExp('\/assets(.*)'), express['static'](__dirname) );

    router.get('/', function(req, res){
        res.statusCode = 200;
        res.write(fs.readFileSync(__dirname + '/index.html'));
        res.end();
    })

    router.all('*', function(req, res){
        res.statusCode = 404;
        res.end();
    })

    return router;
})();
