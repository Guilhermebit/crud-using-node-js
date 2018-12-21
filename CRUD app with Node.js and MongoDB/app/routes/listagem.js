  module.exports = function(app, req, res) {    
    app.get('/listagem', function(req, res) {
      app.app.controllers.listagem.listar(app, req, res);
  });
 }