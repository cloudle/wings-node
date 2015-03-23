const fs = require('fs'),
    filename = process.argv[2];

if (!filename) {
    throw Error("A file to watch must be specified!")
}

fs.watch(filename, function(){
    console.log("File " + filename + " has just changed!");
});

console.log("Now watching " + filename + " for changes...");
console.log(process.argv[0]);
console.log(process.argv[1]);