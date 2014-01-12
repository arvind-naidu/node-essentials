process.stdin.on('readable', function() {
	var buf = process.stdin.read();
	console.dir(buf);
});

/* process flow
	- when data is available, `readable` event fires and you can call `.read()` to fetch data from buffer
	- when the stream is finished, `.read() returns `null` because there are no more bytes to fetch