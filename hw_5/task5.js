"use strict";

const getFactorial = (number) =>
  number === 1 ? number : number * getFactorial(number - 1);

console.log(getFactorial(6));
