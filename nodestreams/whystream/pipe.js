// .pipe() to pair inputs with outputs
// just a function; takes a readable source stream `src` and hooks the output to a destination
// writable stream `dst`

src.pipe(dst)

// `.pipe(dst) returns `dst` so that you can chain together multiple `.pipe()` calls together

a.pipe(b).pipe(c).pipe(d)

// same as

a.pipe(b);
b.pipe(c);
c.pipe(d);

// very much like command-line

a | b | c | d