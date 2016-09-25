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
		};

		http.get("http://www.weather.com.cn/data/sk/"+id+".html", function(res2) {
		  var data = '';
		  res2.on('data', function (chunk) {  
		        data += chunk; 
		   }); 

		  res2.on('end', function () {   
		        res.json({
		        	result: true,
		        	params: JSON.parse(data)
		        })
		   }); 
		}).on('error', function(e) {
		  console.log("RPC init get error: " + e.message);
		}); 
	}
}
