var http = require('http');

var stream_data_1 = "";
var s1d = false;
var stream_data_2 = "";
var s2d = false;
var stream_data_3 = "";
var s3d = false;

function output_data(){
  if (s1d && s2d && s3d){
      console.log(stream_data_1);
      console.log(stream_data_2);
      console.log(stream_data_3);
    }
}

http.get(process.argv[2], function cb(response){
  	response.setEncoding("utf8");
	response.on("data", function (data) {
		stream_data_1 = stream_data_1 + data;

	});
	response.on("end", function () {
    s1d = true;

    output_data();
	});
});

http.get(process.argv[3], function cb(response){
    response.setEncoding("utf8");
  response.on("data", function (data) {
    stream_data_2 = stream_data_2 + data;

  });
  response.on("end", function () {
    s2d = true;

    output_data();
  });
});

http.get(process.argv[4], function cb(response){
    response.setEncoding("utf8");
  response.on("data", function (data) {
    stream_data_3 = stream_data_3 + data;

  });
  response.on("end", function () {
    s3d = true;

    output_data();
  });
});