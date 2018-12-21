module.exports = function(app, req, res) {
   app.get('/cadastro', function(req, res) {
      app.app.controllers.cadastro.cadastro(app, req, res);
  });

     app.post('/cadastrar', function(req, res) {
      app.app.controllers.cadastro.cadastrar(app, req, res);
  });

}