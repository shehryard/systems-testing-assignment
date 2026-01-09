// Coverter function logic

const Roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const numToRoman = (num) => {
  num = Number(num);

  if (!Number.isFinite(num)) return "Please enter a valid number.";
  if (!Number.isInteger(num)) return "Please enter a whole number (no decimals).";
  if (num > 3999) return "The Romans had no representation for values above 3999";
  if (num <= 0) return "The Romans had no representation for 0 and below";

  let result = "";

  for (let i = 0; i < arabic.length; i++) {
    while (num >= arabic[i]) {
      result += Roman[i];
      num -= arabic[i];
    }
  }
  return result;
};

// Works in Jest (Node) AND in Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { numToRoman };
} else {
  window.numToRoman = numToRoman;
}