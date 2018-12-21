module.exports.editar = function(app, req, res) {

	    var connection = app.config.dbConnection;
        var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        var _id = req.params.id;

 		UsuariosDAO.editarUsuario(_id, res);

}

module.exports.salvar_edicao = function(app, req, res) {

	    var connection = app.config.dbConnection;
        var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

	    var id = req.params.id;
        var nome = req.body.nome;
        var sobrenome = req.body.sobrenome;

        UsuariosDAO.salvaEdicaoUsuario(id, nome, sobrenome, res);
}