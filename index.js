fs = require('fs');
promise = require('bluebird');
tokenizer = require('./tokenizer');
parser = require('./parser');
promise.promisifyAll(fs);
fs.readFileAsync('test.html', 'utf-8').then(function(data){
    var tree = parser(tokenizer(data));
});
