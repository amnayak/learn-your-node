var through = require('through');
var http = require('http');

    function write (buf) {
      this.queue(buf.toString().toUpperCase());
    }

    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(write)).pipe(res);
        } else {
        	 res.end();
        }
       
    });


    server.listen(process.argv[2]);