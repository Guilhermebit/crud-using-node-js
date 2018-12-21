var ObjectID = require('mongodb').ObjectID;

function UsuariosDAO(connection) {
	this._connection = connection();

}

//cadastra usuarios
UsuariosDAO.prototype.inserirUsuario = function(usuario) {
	this._connection.open( function(err, mongoclient) {
		mongoclient.collection("usuarios", function(err, collection) {
                collection.insert(usuario);

                mongoclient.close();
		});

	});

}


//lista usuarios
UsuariosDAO.prototype.listarUsuarios = function(res, msgEdicao, msgDelete) {
	this._connection.open( function(err, mongoclient) {
        mongoclient.collection("usuarios", function(err, collection) {
          collection.find({}).toArray(function(err, result) {
            res.render("listar", {usuarios: result, msgEdicao : msgEdicao, msgDelete : msgDelete});

               mongoclient.close();
        });
	});
  });
}

//edita usuarios 
UsuariosDAO.prototype.editarUsuario = function(_id, res) {
	     this._connection.open( function(err, mongoclient) {
			 mongoclient.collection("usuarios", function(err, collection) {
                collection.find(ObjectID(_id)).toArray(function (err, result) {
 					 res.render("editar", {usuarios : result});

                	 mongoclient.close();

                });
		   });	 
	   });		               
  }

  //salva edicao
  UsuariosDAO.prototype.salvaEdicaoUsuario = function(id, nome, sobrenome, res) {
	     this._connection.open( function(err, mongoclient) {
			 mongoclient.collection("usuarios", function(err, collection) {
                collection.update({_id : ObjectID(id)}, {
                	  $set:{ nome: nome, sobrenome: sobrenome}}, function(err, result) {

      				 res.redirect('/listagem?msgEdicao=edicao_ok');

                	 mongoclient.close();

                	 });

                });
		   });	 
	   	               
  }

//remove usuarios
UsuariosDAO.prototype.removeUsuario = function(_id, res) {
	 this._connection.open( function(err, mongoclient) {
         mongoclient.collection("usuarios", function(err, collection) {
          collection.remove(
            {_id : ObjectID(_id)},
            function(err, result) {
            	res.redirect('listagem?msgDelete=delete_ok');
            	mongoclient.close();
              }
            );
        });
    });	
}


module.exports = function() {
	return UsuariosDAO;
}