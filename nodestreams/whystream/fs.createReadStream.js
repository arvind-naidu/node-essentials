/* `(req, res)` arguments are streams
	can be written in a better way - fs.createReadStream() instead of fs.readFile()
	.pipe() - takes care of listening for 'data' and 'end' events from fs.createReadStream()

	Advantages
	==========
	- cleaner code
	- `data.txt` written to clients one chunk at a time immediately after reading from the disk

	Advantages of using .pipe()
	===========================
	- handling backpressure automatically
	- won't buffer chunks into memory : remote client is on a slow or high-latency connection
*/


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(res);
});
server.listen(8000);