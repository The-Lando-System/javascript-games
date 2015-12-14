var express = require('express');

module.exports = function(app) {
	
	// Application Routes ======================
	app.get('/', function(req,res){
		res.sendfile('./public/views/index.html');
	});
	app.get('/home', function(req,res){
		res.sendfile('./public/views/home.html');
	});
	app.get('/tic-tac-toe', function(req,res){
		res.sendfile('./public/views/tic-tac-toe.html');
	});
};