exports.parsegivenitem = function(item){
	var RomanNumerals = require("./romannumerals");

	var numerals = new RomanNumerals();
	if (isNaN(item)) {
		return numerals.parseString(item);
	} else {
		return numerals.generate(item);
	}
}
