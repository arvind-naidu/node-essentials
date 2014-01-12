/* possible to inform `.read(n)` to return `n` bytes of data.
   reading a number of bytes is merely advisory and does not work
   for object streams, but all the core streams support it
*/

// example of using `.read(n) to buffe stdin into 3-byte chunk

process.stdin.on('readable', function () {
	var buf = process.stdin.read(3);
	console.dir(buf);
});

// incomple data is given by running this example