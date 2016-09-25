var http = require('http');  
var qs = require('querystring');
var parseString = require('xml2js').parseString;

var jsonCity = {};
module.exports = {
	init: function(){/*初始化所有rpc接口*/
		http.get("http://mobile.weather.com.cn/js/citylist.xml", function(res) {
		  var xml = '';
		  res.on('data', function (chunk) {  
		        xml += chunk; 
		   }); 

		  res.on('end', function () {   
		        parseString(xml, function(err, result){
		        	jsonCity = result;
		        })
		   }); 
		}).on('error', function(e) {
		  console.log("RPC init get error: " + e.message);
		}); 
	},

	refresh: function(params){
		console.log(params)
	}
}
