module.exports = function(app, req, res) {
	app.get('/remover', function(req, res) {
      app.app.controllers.remover.remover(app, req, res);
   });
}