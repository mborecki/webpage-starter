var sass = require('node-sass');
var watch = require('node-watch');
var fs = require('fs');


var INPUT_PATH = './app/css/';
var INPUT_PATH_FILENAME = 'main.scss';
var OUTPUT_FILENAME = 'bundle.css';
var OUTPUT_PATH = './app/css/';

var render = function(){
    sass.render({
        file: './app/css/main.scss',
        outFile: OUTPUT_PATH + OUTPUT_FILENAME
    }, function(error, result){
        fs.writeFile(OUTPUT_PATH + OUTPUT_FILENAME, result.css, function(err){
            if(!err){
                console.log('CSS on disk!')
            } else {
                console.log('ERROR!', err)
            }
        });
    })
}

var filter = function(pattern, fn) {
    return function(filename) {
        if (pattern.test(filename)) {
            fn(filename);
        }
    }
}

if (process.argv.indexOf('--watch') > -1) {
    render();
    watch(INPUT_PATH, filter(/\.scss$/, function(filename) {
        render();
    }));
} else {
    render();
}