var through = require('through');
var split = require('split');

var num = 1;


process.stdin
	.pipe(split())
	.pipe(through(function (line) {
            //console.dir(line.toString());
            //.pipe(process.stdout);
            if (num % 2 == 1){
            	var str = line.toString().toLowerCase();
            	this.queue(str + "\n");
            } else {
            	var str = line.toString().toUpperCase();
            	this.queue(str + "\n");
            }

            num++;

        }))
	.pipe(process.stdout)
    ;

//var stream = through(write, end);

//process.stdin.pipe(stream).pipe(process.stdout);