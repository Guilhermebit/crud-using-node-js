module.exports = function(app,  req, res) {
	app.get('/', function(req, res) {
      app.app.controllers.index.index(app, req, res);
	});
}