const fs = require('fs');
var fsTimeout

fs.watch('target.txt', function() {
    if(!fsTimeout) {
        console.log("File 'target.txt' just changed");
        fsTimeout = setTimeout(function () {
            fsTimeout = null
        }, 1000);
    }
});

console.log("Now watching target.txt for changes...")