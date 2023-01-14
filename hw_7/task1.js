"use strict";

/* Create an array of elements split into groups the length of size. If array can't be split 
evenly, the final chunk will be the remaining elements. 

Ex:
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

*/

const splitArray = (someArray, chunkSize) => {
  const splittedArray = [];
  const someArrayCopy = someArray.slice(0);

  while (someArrayCopy.length !== 0) {
    const groupedElements = someArrayCopy.splice(0, chunkSize);

    splittedArray.push(groupedElements);
  }

  return splittedArray;
};

console.log(
  splitArray(["a", "b", "c", "d", "b", "c", "d", "b", "c", "d", "b", "c"], 2)
);
