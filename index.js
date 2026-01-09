// Coverter function logic

const Roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const numToRoman = (num) => {
    const raw = String(num ?? "").trim()
    
    // Reject any decimal format like "2.0" or "2.5"
    if (raw.includes(".")){
        return "Please enter a whole number (no decimals).";
    }

  num = Number(raw);

  if (!Number.isFinite(num)) return "Please enter a valid number.";
  if (!Number.isInteger(num)) return "Please enter a whole number (no decimals)."; //validation for decimals
  if (num > 3999) return "The Romans had no representation for values above 3999"; //validation for numbers above 3999
  if (num <= 0) return "The Romans had no representation for 0 and below"; // validation for numbers below 1 and negative values

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