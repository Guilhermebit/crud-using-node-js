module.exports.remover = function(app, req, res) {

		var url_query = req.query;
 
	    var connection = app.config.dbConnection;
        var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

        var _id = url_query.id;

 		UsuariosDAO.removeUsuario(_id, res);

}