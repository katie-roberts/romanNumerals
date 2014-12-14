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
		res.end(generateScreenOutput("integer entered ", POST.integer) + "\n" + generateScreenOutput("numeral entered", POST.numeral));
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

server.get("/numeral/:value", function(req, res) {
	res.end(generateScreenOutput("You entered", req.params.value));
});

function getDataFromQueryStringParam (res, url_parts) {
	var results = "";
	if (url_parts.query.numeral) {
		res.end(generateScreenOutput("You entered", url_parts.query.numeral));
	}
	res.end(results);
}

function generateScreenOutput (type, item) {
	return(type + " " + item + " which converts to : " + parseItem.parsegivenitem(item));

}
server.listen(8080);