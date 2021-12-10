var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use("/",express.static('public'));
/*app.get("/pagina2", function(req,res));
res.sed("PAGINA 2");*/

server.listen(5001, function(){
	console.log("Servidor corriendo en http://localhost:5001");
});