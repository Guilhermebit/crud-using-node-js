var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//implementando o express para a manipulação das funções do node
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');  

//permite utilizar os recursos estáticos a partir da raiz
app.use(express.static('./app/public'));

//implementando o body parser, para  recuperar as informações via POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

//implementando as rotas com consign
consign().include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;