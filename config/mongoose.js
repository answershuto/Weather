var config = require('./config')

module.exports = function(){
	require('../app/models/news.server.model.js');

	return db;
}