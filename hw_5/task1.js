"use strict";

// Complete the solution so that the function will break up camel casing, using a space between words.

const breakCamelCase = (someString) => {
  const arrayFromString = someString.split("");

  const convertedArray = arrayFromString.map((currentLetter, index, array) => {
    const nextLetter = array[index + 1];

    if (nextLetter && nextLetter === nextLetter.toUpperCase()) {
      return (currentLetter += " ");
    }

    return currentLetter;
  });

  return convertedArray.join("");
};

console.log(
  breakCamelCase(`HiMyNameIsWhatMyNameIsWhoMyNameIsChikaChikaSlimShady`)
);
