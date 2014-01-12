/* extra data left in internal buffers
   need to give node a "kick" to tell it we're
   interested in more data past the 3 bytes that is read
*/

// simple `.read(0) will do this

process.stdin.on('readable', function() {
	var buf = process.stdin.read(3);
	console.dir(buf);
	process.stdin.read(0);
});

// code works as expected in 3-byte chunks