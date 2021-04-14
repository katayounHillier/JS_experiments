function roman_numerals(romanChar) {
  // this function takes a roman numeric symbol and returns decimal integer
  roman_symbols = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1_000],
  ]);
  //console.log(romanChar);
  if (romanChar.length == 1) {
    return roman_symbols.get(romanChar);
  } else
    return roman_symbols.get(romanChar[0]) + roman_symbols.get(romanChar[1]);
}
module.exports = roman_numerals;
