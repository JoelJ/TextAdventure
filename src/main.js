var sys = require('util');
var http = require('http');

http.createServer(function(request, response) {
	console.log("request", request);

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Howdeh</h1>');
}).listen(8080, '0.0.0.0');

sys.puts('Server running at http://localhost:8080/');