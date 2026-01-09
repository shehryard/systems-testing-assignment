// Roman Numerals converter, with Ping-Pong TDD
const{numToRoman} = require('./index');

// Smoke Test - Checks that jest is working
test('That Jest is working', () => {
    expect(2+2).toBe(4);
});

describe("tests function numToRoman", () => {
    test("that 1 is I in Roman Numerals", () => {
        expect(numToRoman(1)).toBe("I");
    });
    test("that 2 is II in Roman Numerals", () => {
        expect(numToRoman(2)).toBe("II");
    });
    test("that 3 is III in Roman Numerals", () => {
        expect(numToRoman(3)).toBe("III");
    });
    test("that 4 is IV in Roman Numerals", () => {
        expect(numToRoman(4)).toBe("IV");
    });
    test("that 5 is V in Roman Numerals", () => {
        expect(numToRoman(5)).toBe("V");
    });
    test("that 6 is VI in Roman Numerals", () => {
        expect(numToRoman(6)).toBe("VI");
    });
    test("that 7 is VII in Roman Numerals", () => {
        expect(numToRoman(7)).toBe("VII");
    });
    test("that 8 is VIII in Roman Numerals", () => {
        expect(numToRoman(8)).toBe("VIII");
    });
    test("that 9 is IX in Roman Numerals", () => {
        expect(numToRoman(9)).toBe("IX");
    });
    test("that 10 is X in Roman Numerals", () => {
        expect(numToRoman(10)).toBe("X");
    });
    test("that 40 is XL in Roman Numerals", () => {
        expect(numToRoman(40)).toBe("XL");
    });
    test("that 50 is L in Roman Numerals", () => {
        expect(numToRoman(50)).toBe("L");
    });
    test("that 99 is XCIX in Roman Numerals", () => {
        expect(numToRoman(99)).toBe("XCIX");
    });
    test("that 100 is C in Roman Numerals", () => {
        expect(numToRoman(100)).toBe("C");
    });
    test("that 500 is D in Roman Numerals", () => {
        expect(numToRoman(500)).toBe("D");
    });
    test("that 400 is CD in Roman Numerals", () => {
        expect(numToRoman(400)).toBe("CD");
    });
    test("that 1000 is M in Roman Numerals", () => {
        expect(numToRoman(1000)).toBe("M");
    });
    test("that 2022 is MMXXII in Roman Numerals", () => {
        expect(numToRoman(2022)).toBe("MMXXII");
    });

// describe block to inform users that Romans did not have a number for zero, or negative values, or above 3999
describe("test that numbers below 1 and above 3999 cannot be converted", () => {
    test("should not convert 0", () => {
        expect(numToRoman(0)).toEqual("The Romans had no representation for 0 and below");
    });
    test("should not convert negative numbers", () => {
        expect(numToRoman(-10)).toEqual("The Romans had no representation for 0 and below");
    });
    test("should not convert 4000 and above", () => {
        expect(numToRoman(4001)).toEqual("The Romans had no representation for values above 3999");
    });
    // added more tests for the new validation behaviour
    test("3999 is MMMCMXCIX", () => {
        expect(numToRoman(3999)).toBe("MMMCMXCIX");
    });
    test("4000 is rejected", () => {
        expect(numToRoman(4000)).toBe("The Romans had no representation for values above 3999");
    });
    test("decimal input is rejected", () => {
        expect(numToRoman(2.5)).toBe("Please enter a whole number (no decimals).");
    });
    test("non-numeric input is rejected", () => {
        expect(numToRoman("abc")).toBe("Please enter a valid number.");
    });
    // test for decimal bug fix - inputting a value of 2.0 is showing as II when romanizing, however it should not accept any decimal values.
    test("decimal formatted input like 2.0 is rejected", () => {
        expect(numToRoman("2.0")).toBe("Please enter a whole number (no decimals).");
    });

});
})