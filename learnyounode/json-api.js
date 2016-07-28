var http = require('http');
var url = require('url');

function parsetime(time){
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixtime(time){
	return {unixtime : time.getTime() }
}

var server = http.createServer(function callback (req,res){
	  var req_url = url.parse(req.url, true);
	  var time = new Date(req_url.query.iso);

	  var result;

	  if (/^\/api\/parsetime/.test(req.url)){
	  	result = parsetime(time);
	  }

	 if (/^\/api\/unixtime/.test(req.url)){
	  	result = unixtime(time);
	  	
	  }

	   res.writeHead(200, { 'Content-Type': 'application/json' });
	   res.end(JSON.stringify(result));

	 
});

server.listen(process.argv[2]);