/* compression streaming modules 
   compressed for browsers that support gzip or deflate
   let oppressor handle content-encoding stuff
*/

var http = require('http');
var fs = require('fs');
var oppressor = require('oppressor');

var server = http.createServer(function(req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(oppressor(req)).pipe(res);
});
server.listen(8000);