var http = require('http');
var fs = require('fs');

var server = http.createServer(function callback (request, response) 
{
	var src = fs.createReadStream(request);
	src.pipe(response)


}  );

server.listen(process.argv[2]);