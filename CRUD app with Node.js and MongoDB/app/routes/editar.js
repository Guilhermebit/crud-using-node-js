module.exports = function(app, req, res) {
   app.get('/editar/:id', function(req, res) {
      app.app.controllers.editar.editar(app, req, res);
  });

   app.post('/editar/salvar_edicao/:id', function (req, res) {
      app.app.controllers.editar.salvar_edicao(app, req, res);

   });

}