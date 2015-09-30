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
	
httpsServer.listen(8000);
console.log('Serveur lancé sur le port 8000');
