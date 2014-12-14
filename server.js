var http = require("http"),
	util = require("util"),
	form = require("fs"),
	url = require("url"),
	express = require("express"),
	queryString = require("querystring");
parseItem = require("./script/parseitem.js");

var server = express();

server.post("/formEntry", function(req, res) {
	var body = "";
	req.on("data", function(data) {
		body += data;
	})
	req.on("end", function() {
		var POST = queryString.parse(body);
		res.end(generateScreenOutput(POST.integer) + "\n" + generateScreenOutput(POST.numeral));
	});
});

server.get("/", function(req, res) {
	form.readFile("./form.html", function(error, data) {
		res.end(data);
	});
});

server.get("/query", function(req, res) {
	var url_parts = url.parse(req.url, true);
	getDataFromQueryStringParam(res, url_parts);
});

server.get("/numeral", function(req, res) {
	res.end("you need to add a value to the end of that url");
});

server.get("/numeral/:value", function(req, res) {
	res.end(generateScreenOutput(req.params.value));
});

function getDataFromQueryStringParam (res, url_parts) {
	var results = "";
	if (url_parts.query.numeral) {
		res.end(generateScreenOutput(url_parts.query.numeral));
	}
	res.end(results);
}

function generateScreenOutput (item) {
	return("You entered " + item + " which converts to : " + parseItem.parsegivenitem(item));

}
server.listen(8080);