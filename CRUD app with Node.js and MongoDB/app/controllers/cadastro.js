module.exports.cadastro = function(app, req, res) {
     res.render('cadastro', { validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function(app, req, res) {
  
     var dadosForm = req.body;

     req.assert('nome', 'Nome não pode ser vazio').notEmpty();
     req.assert('sobrenome', 'Sobrenome não pode ser vazio').notEmpty();

     var erros = req.validationErrors();

     if(erros) {
        res.render('cadastro', {validacao : erros, dadosForm : dadosForm});
        return;
     }

     var connection = app.config.dbConnection;
     var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

     UsuariosDAO.inserirUsuario(dadosForm);
     
     res.redirect('listagem');

}
