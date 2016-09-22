var rpcMethon = require('./rpcMethon.server.controller');

module.exports = {
	rpcServer: function(req, res, next){
		if (req.body.method && rpcMethon[req.body.method]) {
			rpcMethon[req.body.method](req.body.params);
		};
	}
}
