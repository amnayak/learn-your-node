var http = require('http');

  //Write a program that performs an HTTP GET request to a URL provided to you  
  //as the first command-line argument. Collect all data from the server (not  
  //just the first "data" event) and then write two lines to the console  
  //(stdout).  
   
  //The first line you write should just be an integer representing the number  
  //of characters received from the server. The second line should contain the  
  //complete String of characters sent by the server.  

//  Where the response object is a Node Stream object. You can treat Node  
//Streams as objects that emit events.

var stream_data = "";

http.get(process.argv[2], function cb(response){
	//The three events that are of most  
  //interest are: "data", "error" and "end". 

  	//listening for data
  	response.setEncoding("utf8");
	response.on("data", function (data) {
		stream_data = stream_data + data;

	});
	response.on("end", function () {
		console.log(stream_data.length);
		console.log(stream_data);

	});
});