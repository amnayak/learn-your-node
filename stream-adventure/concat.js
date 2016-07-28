var concat = require('concat-stream');

process.stdin
	.pipe(concat(function callback (data) {
		var reversed = data.toString().split('').reverse().join('');
		console.log(reversed);
	}))
	
	;

