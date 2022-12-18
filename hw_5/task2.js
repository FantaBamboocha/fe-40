"use strict";

/* You are provided with consecutive elements of an Arithmetic Progression. There is however 
one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. 
The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will 
never be the first or last one. */

const findMissingTerm = (arithmeticProgression) => {
  const firstTermOfProgression = arithmeticProgression[0];
  const lastTermOfProgression = arithmeticProgression.at(-1);
  const termsQuantity = arithmeticProgression.length;

  const arithmeticProgressionStep =
    (lastTermOfProgression - firstTermOfProgression) / termsQuantity;

  for (let i = 0; i < arithmeticProgression.length; i++) {
    if (
      arithmeticProgression[i] + arithmeticProgressionStep !==
      arithmeticProgression[i + 1]
    ) {
      return arithmeticProgression[i] + arithmeticProgressionStep;
    }
  }
};

console.log(findMissingTerm([8, 16, 24, 32, 48, 56]));
