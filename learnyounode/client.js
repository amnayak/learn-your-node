var http = require('http');

//Write a program that performs an HTTP GET request to a URL provided to you  
//as the first command-line argument. Write the String contents of each  
//"data" event from the response to a new line on the console (stdout).  


//  Where the response object is a Node Stream object. You can treat Node  
//Streams as objects that emit events.

http.get(process.argv[2], function cb(response){
	//The three events that are of most  
  //interest are: "data", "error" and "end". 

  	//listening for data
  	response.setEncoding("utf8");
	response.on("data", function (data) {
		console.log(data);

	});
});