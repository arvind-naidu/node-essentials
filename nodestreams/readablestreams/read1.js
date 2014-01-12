// push chunks on-demand by defining ._read function

var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);

// push letters `a` to `z`, inclusive, but only when consumer is ready to read them
// _read:
	// - gets a provisional `size` param as 1st argument that specifies how many bytes the consumers wants to read
	// - but readable stream can ignore the `size` if it wants
// `util.inherits() to subclass a Readable stream; this approach doesn't lend well to comprehensible examples	