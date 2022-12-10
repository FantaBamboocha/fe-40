"use strict";

/* Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая.
ВСЕ массивы должны иметь этот метод. Примеры ниже. */

const numberList = [1, 2, 3];

Array.prototype.myFilter = function (callbackFunction) {
  const resultArray = [];

  for (let index = 0; index < this.length; index++) {
    const result = callbackFunction(this[index], index, this);

    result && resultArray.push(this[index]);
  }

  return resultArray;
};

console.log(numberList.myFilter((number) => number % 2 === 0));

console.log(numberList.myFilter((number) => number > 2));
