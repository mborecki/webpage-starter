var router = require('express').Router();

module.exports = (function(){

    router.get('/', function(req, res){
        res.statusCode = 200;
        var helloWorld = {
            status: 'ok',
            message: 'Hello World'
        }
        res.write(JSON.stringify(helloWorld));
        res.end();
    });

    router.all('*', function(req, res){
        res.statusCode = 404;
        res.end();
    });

    return router;
})();
