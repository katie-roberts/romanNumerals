var http = require('http'),
	util = require('util'),
	form = require('fs'),
	url = require('url'),
	queryString = require('querystring');
	parseItem = require('./script/parseitem.js');

var server = http.createServer(function(req, res) {

	var url_parts = url.parse(req.url, true);

	var body = '';
	if (req.method === 'POST') {
		req.on('data', function(data) {
			body += data;
		});
		req.on('end', function() {
			var POST = queryString.parse(body);
			var results = "";
			results = results + generateScreenOutput("integer entered ", POST.integer) + "\n" + generateScreenOutput("numeral entered", POST.numeral);
			res.end(results);
		});


	} else {
		req.on('data', function(data) {
			res.end(' data event: ' + data);
		});
		if (url_parts.pathname == '/')
			form.readFile('./form.html', function(error, data) {
				res.end(data);
			});

		else if (url_parts.pathname == '/getData') {
			getDataFromQueryStringParam(res, url_parts);
		}
	}

});


function getDataFromQueryStringParam (res, url_parts) {
	var results = "";
	if (url_parts.query.numeral) {
		res.end(generateScreenOutput("You entered", url_parts.query.numeral));
	}
	res.end(results);
}

function generateScreenOutput(type, item){
	console.log("item :: " +parseItem.parsegivenitem);
	return(type+ " "+ item + " which converts to : " + parseItem.parsegivenitem(item));

}
server.listen(8080);
console.log('Server listenning at localhost:8080');