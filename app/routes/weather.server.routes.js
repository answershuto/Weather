var WeatherController = require('../controllers/weather.server.controller');

module.exports = function(app){
	app.route('/')
		.get(function(req,res,next){
			res.sendFile('index.html');
		});
	app.route('/weather/rpc')
	 	.post(WeatherController.rpcServer);

	// app.route('/news/find')
	// 	.all(WeatherController.find);
}