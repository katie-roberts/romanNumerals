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
			res.end(generateScreenOutput("integer entered ", POST.integer) + "\n" + generateScreenOutput("numeral entered", POST.numeral));
		});


	} else {
		req.on('data', function(data) {
			res.end(' data event: ' + data);
		});
		if (url_parts.pathname == '/'){
			form.readFile('./form.html', function(error, data) {
				res.end(data);
			});
		}
		if (url_parts.pathname == '/query') {
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
	return(type+ " "+ item + " which converts to : " + parseItem.parsegivenitem(item));

}
server.listen(8080);