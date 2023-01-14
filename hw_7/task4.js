"use strict";

/* Написать метод которые повторяет логику Object.fromEntries(). 
EX: customFromEntries([[‘a’, 1], [‘b’, 2]]) // { a: 1, b:2 }
 */

const customFromEntries = (someArray) => {
  const objectFromEntries = {};

  for (const [key, value] of someArray) {
    objectFromEntries[key] = value;
  }

  return objectFromEntries;
};

console.log(
  customFromEntries([
    ["a", 1],
    ["b", 2],
    [56, "hahaha"],
  ])
);
