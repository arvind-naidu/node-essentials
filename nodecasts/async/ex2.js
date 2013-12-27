var fs = require('fs');

console.log("Starting to read the file..");
// var contents = "";

fs.readFile(__filename, "utf8", function(err, results) {
    console.log("Done reading the file:", results);
});