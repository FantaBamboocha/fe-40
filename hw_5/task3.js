"use strict";

/* Create a function that takes a Roman numeral as its argument and return its value as a numeric decimal integer */

/* I had to get to know debugger while doing this task and the task with factorial */

const convertRomanToInteger = (romanString) => {
  const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let integer = 0;

  for (let i = romanString.length - 1; i >= 0; i--) {
    const current = romanString[i];
    const next = romanString[i - 1];

    if (!next) {
      integer += romanNumbers[current];
    } else if (romanNumbers[current] > romanNumbers[next]) {
      integer += romanNumbers[current] - romanNumbers[next];
      i--;
    } else {
      integer += romanNumbers[current] + romanNumbers[next];
      i--;
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
