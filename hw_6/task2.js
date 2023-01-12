"use strict";

/* Write a function that takes an array of values and moves all elements that are zero to the end of the array, 
otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or 
Object.prototype methods. */

const moveZeroElements = (arrayOfNumbers) => {
  for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    if (arrayOfNumbers[i] === 0 || arrayOfNumbers[i] === "0") {
      const deletedElement = arrayOfNumbers.splice(i, 1);

      arrayOfNumbers.push(deletedElement[0]);
    }
  }
  return arrayOfNumbers;
};

console.log(
  moveZeroElements([7, 2, 3, 0, 4, 6, 0, 0, "0", 13, 0, 78, 0, 0, 19, "0", 14])
);

const anotherMethod = (someArray) => {
  const numbersArray = [];
  const zerosArray = [];

  for (const item of someArray) {
    if (item === 0 || item === "0") {
      zerosArray[zerosArray.length] = item;
    } else {
      numbersArray[numbersArray.length] = item;
    }
  }

  return [...numbersArray, ...zerosArray];
};

console.log(
  anotherMethod([7, 2, 3, 0, 4, 6, 0, 0, "0", 13, 0, 78, 0, 0, 19, "0", 14])
);
