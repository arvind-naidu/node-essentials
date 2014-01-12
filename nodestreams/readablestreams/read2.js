/* to show _read function is only called
   when the consumer requests,
   we can modify readable stream code
   slightly to add a delay
*/

var Readable = require('stream').Readable;
var rs = Readable();

var c = 97 -1;

rs._read = function() {
	if(c >= 'z'.charCodeAt(0)) return rs.push(null);

	setTimeout(function () { // setTimeout : OS requires some time to send relevant signals to close pipe
		rs.push(String.fromCharCode(++c));
	}, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
	console.error('\n_read() called ' + (c - 97) + 'times');
});
process.stdout.on('error', process.exit); 

// `process.stdout.on` : OS will send a SIGPIPE to process
// when `head` no longer interested in program's output
// which gets emitted as an EPIPE error on `process.stdout`

// create a readable stream that pushes arbitrary values
// instead of just string and buffers
// make sure to create readable stream with
// `Readable({ objectMode: true })