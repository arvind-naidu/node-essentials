var http = require('http');

var server = http.createServer(function(request, response) {
    var url = request.url;
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end("<h1>Hello from Node.js!</h1><p>You request the URL: " + url + "</p>");
});

server.listen(3000);