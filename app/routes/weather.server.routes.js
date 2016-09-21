var WeatherController = require('../controllers/weather.server.controller');

module.exports = function(app){
	app.route('/')
		.get(function(req,res,next){
			res.sendFile('index.html');
		});
	// app.route('/news/create')
	// 	.get(WeatherController.create)
	// 	.post(WeatherController.create);

	// app.route('/news/find')
	// 	.all(WeatherController.find);
}