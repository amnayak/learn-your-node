 var trumpet = require('trumpet');
 var through = require('through');
 var tr = trumpet();
 var loud = tr.createStream('.loud');

function transform(buf) {
    this.queue(buf.toString().toUpperCase());
}

loud.pipe(through(transform)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);