// `.unshift()` to put back data so that the same 
// read logic will fire when .read() gives
// you more data than you wanted

// using `.unshift() prevents us from making
// unnecessary buffer copies

// build a readable parser to split on newlines

var offset = 0;

process.stdin.on('readable', function () {
	var buf = process.stdin.read();
	if (!buf) return;
	for (; offset < buf.length; offset++) {
		if (buf[offset] == 0x0a) {
			console.dir(buf.slice(0, offset).toString());
			buf = buf.slice(offset + 1);
			offset = 0;
			process.stdin.unshift(buf);
			return;
		}
	}
	process.stdin.unshift(buf);
});

// modules on npm such as `split` should be used
// instead of rolling your own line-parsing logic