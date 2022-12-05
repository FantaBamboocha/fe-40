"use strict";

/* Функция принимает массив строчных и числовых значений. Функция должна вернуть новый массив, 
состоящий только из строк, количество символов которых чётное.

Пример:
fn(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]); // ['Hi', 'JS'] */

const mixedArray = ["Hi", 2, 3, 4, 5, "JS", 2, "C++", ["hi", "js"]];

const selectArrayByFor = (someArray) => {
  if (!Array.isArray(someArray)) return;

  const selectedArray = [];

  for (let i = 0; i < someArray.length; i++) {
    const item = someArray[i];

    if (typeof item === "string" && item.length % 2 === 0) {
      selectedArray.push(item);
    }
  }
  return selectedArray;
};

console.log(selectArrayByFor(mixedArray));

const selectArrayByWhile = (someArray) => {
  if (!Array.isArray(someArray)) return;

  const selectedArray = [];
  let i = 0;

  while (someArray[i]) {
    const item = someArray[i];

    if (typeof item === "string" && item.length % 2 === 0) {
      selectedArray.push(item);
    }
    i++;
  }
  return selectedArray;
};

console.log(selectArrayByWhile(mixedArray));

const selectArrayByForEach = (someArray) => {
  if (!Array.isArray(someArray)) return;

  const selectedArray = [];

  someArray.forEach((item) => {
    if (typeof item === "string" && item.length % 2 === 0) {
      selectedArray.push(item);
    }
  });
  return selectedArray;
};

console.log(selectArrayByForEach(mixedArray));

const selectArrayByFilter = (someArray) => {
  if (!Array.isArray(someArray)) return;

  return someArray.filter(
    (item) => typeof item === "string" && item.length % 2 === 0
  );
};

console.log(selectArrayByFilter(mixedArray));
