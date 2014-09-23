describe("Roman Numerals Tests", function () {

    var romanNumerals;

    beforeEach(function () {

        romanNumerals = new RomanNumerals();
    });

    describe("Sets the bounding limits", function () {
        it("does not accept numbers over 3999", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(4000)).toBe(romanNumerals.NUMBER_OUT_OF_BOUNDS);
        });

        it("does not accept numbers below 0", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(0)).toBe(romanNumerals.NUMBER_OUT_OF_BOUNDS);
        });
    });


    describe("returns numbers as expected", function () {
        it("returns 1 as I", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(1)).toBe("I");
        });
        it("returns 5 as V", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(5)).toBe("V");
        });
        it("returns 10 as X", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(10)).toBe("X");
        });
        it("returns 50 as L", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(50)).toBe("L");
        });
        it("returns 100 as C", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(100)).toBe("C");
        });
        it("returns 500 as D", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(500)).toBe("D");
        });
        it("returns 1000 as M", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(1000)).toBe("M");
        });
        it("returns 4 as IV", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(4)).toBe("IV");
        });
        it("returns 8 as VIII", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(8)).toBe("VIII");
        });
        it("returns 9 as IX", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(9)).toBe("IX");
        });
        it("returns 40 as XL", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(40)).toBe("XL");
        });
        it("returns 90 as XC", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(90)).toBe("XC");
        });
        it("returns 400 as CD", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(400)).toBe("CD");
        });
        it("returns 900 as CM", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(900)).toBe("CM");
        });
    });

    describe("It is able to work out complex numbers", function () {
        it("is able to convert complex numbers to roman numerals", function () {
            expect(romanNumerals.getNumberAsRomanNumeral(3052)).toBe("MMMLII");
            expect(romanNumerals.getNumberAsRomanNumeral(1910)).toBe("MCMX");
            expect(romanNumerals.getNumberAsRomanNumeral(1903)).toBe("MCMIII");
        });
    });

    // testing private functions - I have left in to show my working
    describe("It is able to split large numers up into thousands, hundreds, tens and ones objects", function () {
        it("is able to split large numbers into 1000's, 100's, 10's", function () {
            var expectedResponse = [{value: 3000, type: 1000},
                                    {value: 0, type: 100},
                                    {value: 50, type: 10},
                                    {value: 2, type: 1}];
            expect(romanNumerals._getNumberInRomanNumeralsFormat(3052)).toEqual(expectedResponse);
        });
    });


});
