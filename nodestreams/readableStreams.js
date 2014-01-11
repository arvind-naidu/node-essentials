// readable streams produce data that can be fed into a writable, transform, duplex stream by calling `.pipe()`

// readableStream.pipe(dst)

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep '); 
rs.push('boop\n');
rs.push(null); // tells the consumer that `rs` is done outputting data

rs.pipe(process.stdout);

/* - pushed content to the readable stream `rs` before piping to process.stdout; but message was still written
   - .push() to readable stream : chunks pushed are buffered until a consumer is ready to read
   - in many circumstances; better to avoid buffering data altogether - only generate data when consumer ask	