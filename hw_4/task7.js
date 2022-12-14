"use strict";

/* Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая. 
ВСЕ массивы должны иметь этот метод. Примеры ниже. */

const numberList = [1, 2, 3];

Array.prototype.myMap = function (callbackFunction) {
  const resultArray = [];

  for (let index = 0; index < this.length; index++) {
    const result = callbackFunction(this[index], index, this);

    resultArray.push(result);
  }

  return resultArray;
};

console.log(numberList.myMap((number) => number ** 2));

console.log(numberList.myMap((number) => String(number)));
