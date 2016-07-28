var net = require('net');

var myServer = net.createServer(function giveTime(socket){
	var d = new Date();
	var date = "";

	date = d.getFullYear()  + "-" +
     (d.getMonth() + 1) + "-" +
     d.getDate()     + " " + 
     d.getHours()  + ":" +
     d.getMinutes(); 
   


	socket.end(date);
});

 myServer.listen(process.argv[2]); 