var rpcMethon = require('./rpcMethon.server.controller');

var bIsRpcInit = false;

module.exports = {
	rpcServer: function(req, res, next){
		if (true) {
			rpcMethon.init();
			bIsRpcInit = true;
		};

		if (req.body.method && rpcMethon[req.body.method]) {
			rpcMethon[req.body.method](req.body.params);
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
