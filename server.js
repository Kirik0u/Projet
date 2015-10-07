var fs = require('fs');
var https = require('https');

var credentials = {
	key: fs.readFileSync('./key.pem', 'utf8'),
	cert: fs.readFileSync('./cert.pem', 'utf8')
};

var express = require('express');
var app = express();

// your express configuration here

var httpsServer = https.createServer(credentials, app);

app.use(express.static(__dirname));

// Chargement de socket.io
var io = require('socket.io').listen(httpsServer);

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket, pseudo) {

	socket.on('nouveau_client', function(pseudo) {
        	socket.pseudo = pseudo;
        	socket.broadcast.emit('nouveau_client', pseudo);
		socket.emit('message', 'Vous êtes bien connecté !');
		socket.broadcast.emit('message', pseudo+' est en ligne !');
    		console.log(pseudo+' est connecté !');
    	});
	
	socket.on('disconnect', function(pseudo){
		socket.broadcast.emit('disconnect', pseudo);
		socket.broadcast.emit('message', pseudo+' est hors-ligne !');
		console.log(pseudo+' est deconnecté !');
	});
});
	
httpsServer.listen(8000);
console.log('Serveur lancé sur le port 8000');
