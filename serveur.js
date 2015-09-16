var http = require('https');
    fs = require('fs');

var options = {
  key: fs.readFileSync('/home/florian/Desktop/Projet/server.key'),
  cert: fs.readFileSync('/home/florian/Desktop/Projet/server.csr')
};

fs.readFile(',/index.html', function(err, html){
	if(err){
		throw err;
	}
	var server = http.createServer(options, function(req, res) {
  		res.writeHead(200);
		res.write(html);
  		res.end('Salut tout le monde !');
	}
});

server.listen(8000);
