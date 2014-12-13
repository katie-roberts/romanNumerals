
//var RomanNumerals = function () {
// 	"use-strict";
	this.NUMBER_OUT_OF_BOUNDS = "Number must be less than 4000";
	this.NOT_VALID_ROMAN_NUMERAL = "Not valid Roman Numeral";

	this.romanNumerals = {
		1: "I",
		5: "V",
		10: "X",
		50: "L",
		100: "C",
		500: "D",
		1000: "M"
	}

	this.generate = function(numberToConvert) { // int to romanNumeral
		if (numberToConvert < 1 || numberToConvert > 3999) {
			return this.NUMBER_OUT_OF_BOUNDS;
		}

		var numeralsArray = this._getNumberInRomanNumeralsFormat(numberToConvert);
		var numeralsString = "";

		for (var i = 0; i < numeralsArray.length; i++) {
			if (numeralsArray[i].value !== 0) {
				numeralsString += this._convertNumberToString(numeralsArray[i]);
			}
		}
		return numeralsString;
	}

	this.parseString = function(numeralToConvert) {
		numeralToConvert = numeralToConvert.toUpperCase()
		if (this._isValidRomanNumeral(numeralToConvert)) {
			return this._convertNumeralToInt(numeralToConvert);
		} else {
			if (numeralToConvert.match('^M{4}')){
				return this.NUMBER_OUT_OF_BOUNDS;
			}
			return this.NOT_VALID_ROMAN_NUMERAL;
		}
	}

	this._isValidRomanNumeral = function(str) {
		var pattern = '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$';
		var validityChecker = str.match(pattern);
		if (validityChecker != null) {
			return true;
		}
		return false;
	}

	this._convertNumeralToInt = function(str) {
		var numeralsArray = str.split("");
		var numbersArray = [];
		for (var i = 0; i < numeralsArray.length; i++) {
			switch (numeralsArray[i]) {
				case "I":
					numbersArray.push(1)
					break;
				case "V":
					numbersArray.push(5);
					break;
				case "X":
					numbersArray.push(10);
					break;
				case "L":
					numbersArray.push(50);
					break;
				case "C":
					numbersArray.push(100);
					break;
				case "D":
					numbersArray.push(500);
					break;
				case "M":
					numbersArray.push(1000);
					break;
			}
		}
		return this._workOutValue(numbersArray);
	}

	this._workOutValue = function(numbersArray) {
		var total = 0;
		for (var i = 0; i < numbersArray.length; i++) {
			if (i < numbersArray.length - 1) {
				if (numbersArray[i] < numbersArray[i + 1]) {
					total = total - numbersArray[i];
				} else {
					total = numbersArray[i] + total;
				}
			} else {
				total = numbersArray[i] + total;
			}
		}

		return total;
	}

	this._getNumberInRomanNumeralsFormat = function(numberToConvert) {

		var ones = numberToConvert % 10;
		var tens = ((numberToConvert % 100) - ones);

		var hundreds = ((numberToConvert % 1000) - tens - ones);
		var thousands = numberToConvert - hundreds - tens - ones;

		var returnArray = [];
		returnArray.push({value: thousands, type: 1000});
		returnArray.push({value: hundreds, type: 100});
		returnArray.push({value: tens, type: 10});
		returnArray.push({value: ones, type: 1});

		return returnArray;
	}

	this._convertNumberToString = function(numberToConvert) {
		for (var num in this.romanNumerals) {
			if (this.romanNumerals.hasOwnProperty(numberToConvert.type))
				if (num === numberToConvert.type.toString()) {
					var numberOfReturns = numberToConvert.value / numberToConvert.type;
					var returnString = "";
					if (numberOfReturns >= 5) {
						if (numberOfReturns == 9) {
							return returnString = this.romanNumerals[numberToConvert.type] + this.romanNumerals[numberToConvert.type * 10];

						} else {
							returnString = this.romanNumerals[(5 * numberToConvert.type)];
							numberOfReturns -= 5;
						}
					}
					if (numberOfReturns === 4) {
						return this.romanNumerals[numberToConvert.type] + this.romanNumerals[numberToConvert.type * 5];
					}

					for (var i = 0; i < numberOfReturns; i++) {
						returnString += this.romanNumerals[num];
					}
					return returnString;
				}
		}
	}
//};

function parseGivenItem(item){
	if (isNaN(item)) {
		return this.parseString(item);
	} else {
		return this.generate(item);
	}
}

module.exports.parseGivenItem = parseGivenItem;

