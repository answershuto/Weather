var http = require('http');  
var qs = require('querystring');
var parseString = require('xml2js').parseString;

var szCity = [];

module.exports = {
	init: function(){/*初始化所有rpc接口*/
		http.get("http://mobile.weather.com.cn/js/citylist.xml", function(res) {
		  var xml = '';
		  res.on('data', function (chunk) {  
		        xml += chunk; 
		   }); 

		  res.on('end', function () {   
		        parseString(xml, function(err, result){
		        	szCity = result.xml.c[0].d;
		        })
		   }); 
		}).on('error', function(e) {
		  console.log("RPC init get error: " + e.message);
		}); 
	},

	refresh: function(req, res, next){
		var id = 0;
		for(var c=0;c<szCity.length;c++){
			if (szCity[c]['$'].d3 == req.body.params.city) {
				id = szCity[c]['$'].d1;
			};
		}
		
		if (id === 0) {/*city id 无效*/
			res.json({
				result: false,
				error: 'the city id is invalid'
			})

			return;
		};

		http.get("http://www.weather.com.cn/data/sk/"+id+".html", function(res2) {
		  var data = '';
		  res2.on('data', function (chunk) {  
		        data += chunk; 
		   }); 

		  res2.on('end', function () {   
		  		http.get("http://www.weather.com.cn/data/cityinfo/"+id+".html", function(res3) {
				  var data2 = '';
				  res3.on('data', function (chunk) {  
				        data2 += chunk; 
				   }); 

				  res3.on('end', function () { 
				  		data = JSON.parse(data);
				  		data2 = JSON.parse(data2);

				  		for(var d in data.weatherinfo){
				  			data2.weatherinfo[d] = data.weatherinfo[d];
				  		}

				        res.json({
				        	result: true,
				        	params: data2
				        })
				   }); 
				}).on('error', function(e) {
				  console.log("RPC init get error: " + e.message);
				}); 
		   }); 
		}).on('error', function(e) {
		  console.log("RPC init get error: " + e.message);
		}); 
	}
}
