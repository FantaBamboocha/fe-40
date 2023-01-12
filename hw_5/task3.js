"use strict";

/* Create a function that takes a Roman numeral as its argument and return its value as a numeric decimal integer */

const convertRomanToInteger = (romanString) => {
  const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let integer = 0;

  for (let i = 0; i < romanString.length; i++) {
    const current = romanString[i];
    const next = romanString[i + 1];

    const currentNumber = romanNumbers[current];
    const nextNumber = romanNumbers[next];

    if (currentNumber < nextNumber) {
      integer -= currentNumber;
    } else {
      integer += currentNumber;
    }
  }

  return integer;
};

console.log(convertRomanToInteger("MDCLXVI"));
console.log(convertRomanToInteger("MCMXC"));
console.log(convertRomanToInteger("MMVIII"));
console.log(convertRomanToInteger("XXI"));
console.log(convertRomanToInteger("XIX"));
console.log(convertRomanToInteger("MCMXCVI"));
