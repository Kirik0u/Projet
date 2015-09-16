var http = require('https');
    fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./server.crt')
};

fs.readFile('./index.html', function(err, html){
	if(err){
		throw err;
	}
	var server = http.createServer(options, function(req, res) {
  		res.writeHead(200);
		res.write(html);
  		res.end('Salut tout le monde !');
	}).listen(8000);
});
