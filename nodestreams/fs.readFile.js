/* 1 - code works
   2 - bulky & buffers entire `data.txt`
   3 - fills memory for every request then writes to client
   // if `data.txt is large: consume a lot of memory if a lot of users especially with slow connection
   4 - poor user experience; users will have to wait for buffer before any content is displayed
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	fs.readFile(__dirname + '/data.txt', function(err, data) {
		res.end(data);
	});
});
server.listen(8000);