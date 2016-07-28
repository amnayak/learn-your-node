var fs = require('fs');
var path = require('path');

var fn = function(name, ext, callback){
	var ext_name = "." + ext;
	 fs.readdir(name, function call(err, list){
		if (!err){
			var new_list = list.filter( function filter_ext(val, ind, ar){
				if (path.extname(val) == ext_name){
					return true;
				} else {
					return false;
				}
			});
			callback(false,new_list);

		} else {
			callback(err, null);
		}
	});
}
module.exports = fn;
