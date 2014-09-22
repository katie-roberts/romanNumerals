/**
 * Roman Numerals Kata
 */
var RomanNumerals = function () {

    this.NUMBER_OUT_OF_BOUNDS = "Number out of bounds";

    this.romanNumerals = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    this.getNumberAsString = function (numberToConvert) {
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


    this._getNumberInRomanNumeralsFormat = function (numberToConvert) {

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

    this._convertNumberToString = function (numberToConvert) {
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
};

