module.exports.listar = function(app, req, res) {

	var connection = app.config.dbConnection;
    var UsuariosDAO = new app.app.models.UsuariosDAO(connection);

    var _id = req.params.id;

    /* mensagens de Edição */
    var msgEdicao = 'edicao_erro';
     
    if(req.query.msgEdicao == 'edicao_ok') {
        	    msgEdicao = 'edicao_ok';

    }

    /* mensagens de Deleção */
    var msgDelete = 'delete_erro';
     
        if(req.query.msgDelete == 'delete_ok') {
        	    msgDelete = 'delete_ok';
 
        }

    
    UsuariosDAO.listarUsuarios(res, msgEdicao, msgDelete);

}