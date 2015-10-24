fs = require('fs');
tokenizer = require('./tokenizer');
fs.readFile('test.scss', 'utf-8', function(err, content) {
    tokenizer(content);
})