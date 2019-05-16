var express = require('express');
var app = express();
var request = require('request');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/result", function(req, res){
	var query = req.query.search;
	var url ="http://www.omdbapi.com/?apikey=113a10b3&s=" + query; 
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data:data});
		}
	});
});


app.listen(3000, function(){
	console.log("Server has starting!");
});