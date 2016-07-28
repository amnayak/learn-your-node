var myMod = require('./hello-world.js');

myMod(process.argv[2], process.argv[3], function callback (err, list){
	for (var i = 0; i<list.length; i++){
		console.log(list[i]);
	}
});