describe("Roman Numerals Tests", function() {

	var romanNumerals;

	beforeEach(function() {
		romanNumerals = new RomanNumerals();
	});

	describe("Sets the bounding limits", function() {
		it("does not accept numbers over 3999", function() {
			expect(romanNumerals.generate(4000)).toBe("Number must be less than 4000");
		});

		it("does not accept numbers below 0", function() {
			expect(romanNumerals.generate(0)).toBe("Number must be less than 4000");
		});
	});


	describe("returns numbers as expected", function() {
		it("returns 1 as I", function() {
			expect(romanNumerals.generate(1)).toBe("I");
		});
		it("returns 5 as V", function() {
			expect(romanNumerals.generate(5)).toBe("V");
		});
		it("returns 10 as X", function() {
			expect(romanNumerals.generate(10)).toBe("X");
		});
		it("returns 50 as L", function() {
			expect(romanNumerals.generate(50)).toBe("L");
		});
		it("returns 100 as C", function() {
			expect(romanNumerals.generate(100)).toBe("C");
		});
		it("returns 500 as D", function() {
			expect(romanNumerals.generate(500)).toBe("D");
		});
		it("returns 1000 as M", function() {
			expect(romanNumerals.generate(1000)).toBe("M");
		});
		it("returns 4 as IV", function() {
			expect(romanNumerals.generate(4)).toBe("IV");
		});
		it("returns 8 as VIII", function() {
			expect(romanNumerals.generate(8)).toBe("VIII");
		});
		it("returns 9 as IX", function() {
			expect(romanNumerals.generate(9)).toBe("IX");
		});
		it("returns 40 as XL", function() {
			expect(romanNumerals.generate(40)).toBe("XL");
		});
		it("returns 90 as XC", function() {
			expect(romanNumerals.generate(90)).toBe("XC");
		});
		it("returns 400 as CD", function() {
			expect(romanNumerals.generate(400)).toBe("CD");
		});
		it("returns 900 as CM", function() {
			expect(romanNumerals.generate(900)).toBe("CM");
		});
	});

	describe("It is able to work out complex numbers", function() {
		it("is able to convert complex numbers to roman numerals", function() {
			expect(romanNumerals.generate(3052)).toBe("MMMLII");
			expect(romanNumerals.generate(1910)).toBe("MCMX");
			expect(romanNumerals.generate(1903)).toBe("MCMIII");
		});
	});

	describe("It takes a string and if valid converts to integer", function() {
		it("checks that the given string is a valid Roman Numberal", function() {
			expect(romanNumerals.parseString("KVII")).toBe("Not valid Roman Numeral");
			expect(romanNumerals.parseString("MCKVII")).toBe("Not valid Roman Numeral");
			expect(romanNumerals.parseString("MMMM")).toBe("Number must be less than 4000");
		})

		it("handles upper and lower case inputs", function(){
			expect(romanNumerals.parseString("iii")).toBe(3);
			expect(romanNumerals.parseString("III")).toBe(3);
			expect(romanNumerals.parseString("cM")).toBe(900);
			expect(romanNumerals.parseString("kvII")).toBe("Not valid Roman Numeral");
		})

		it("is able to convert simple numerals to integers", function() {
			expect(romanNumerals.parseString("I")).toEqual(1);
			expect(romanNumerals.parseString("II")).toEqual(2);
			expect(romanNumerals.parseString("III")).toEqual(3);
			expect(romanNumerals.parseString("V")).toEqual(5);
		})

		it("is able to convert more complex numerals to integers", function() {
			expect(romanNumerals.parseString("IV")).toEqual(4);
			expect(romanNumerals.parseString("IX")).toEqual(9);
			expect(romanNumerals.parseString("MCMIII")).toEqual(1903);
			expect(romanNumerals.parseString("MMMLII")).toEqual(3052);
			expect(romanNumerals.parseString("CMXL")).toEqual(940);
		})
	})

});
