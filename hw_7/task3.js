"use strict";

/* Написать метод, который повторяет логику Object.entries(). 
EX: customEntries({a: 1, b:2}) // [[‘a’, 1], [‘b’, 2]] */

const customEntries = (someObject) => {
  const entries = [];

  for (const key in someObject) {
    entries.push([key, someObject[key]]);
  }

  return entries;
};

console.log(customEntries({ a: 1, b: 2, efwf: [1, 2, 3] }));
