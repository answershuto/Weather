var rpcMethon = require('./rpcMethon.server.controller');

rpcMethon.init();

module.exports = {
	rpcServer: function(req, res, next){

		if (req.body.method && rpcMethon[req.body.method]) {
			rpcMethon[req.body.method](req, res, next);
		}
		else{
			res.json({
				result: false,
				params: {
					error: "the method " + req.body.method + " is not found!"
				}
			});
		}
	}
}
