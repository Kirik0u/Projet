var https = require('https'); //appel à la bibliothèque 'http'
var fs = require('fs');

//on donne à la variable options les fichiers du certificat privé
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

fs.readFile('./index.html', function(err, html){
	if(err){
		throw err; //gestion des erreurs
	}
	//création du serveur
	var a = https.createServer(options, function(req, res) {
  		res.writeHead(200,{"Content-Type": "text/html"});
		res.write(html);
  		res.end();
	}).listen(8000); //on écoute le port 8000
	console.log("Server is listenning");
});
