"use strict";

/* Функция принимает массив чисел. Возвращает массив строк такого вида:

Пример:
fn([3,4,6]); ['Value: 3; Index: 0; Squared: 9','Value: 4; Index: 1; Squared: 16','Value: 6; Index: 2; Squared: 36'] */

const arrayOfNumbers = [1, 2, 3, 4, 5];

const getDetailsByFor = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const detailedArray = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    detailedArray.push(
      `Value: ${number}; Index: ${i}; Squared: ${number ** 2}`
    );
  }
  return detailedArray;
};

console.log(getDetailsByFor(arrayOfNumbers));

const getDetailsByWhile = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const detailedArray = [];
  let i = 0;

  while (numbers[i]) {
    const number = numbers[i];

    detailedArray.push(
      `Value: ${number}; Index: ${i}; Squared: ${number ** 2}`
    );
    i++;
  }
  return detailedArray;
};

console.log(getDetailsByWhile(arrayOfNumbers));

const getDetailsByForEach = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const detailedArray = [];

  numbers.forEach((number, index) => {
    detailedArray.push(
      `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`
    );
  });
  return detailedArray;
};

console.log(getDetailsByForEach(arrayOfNumbers));

const getDetailsByMap = (numbers) => {
  if (!Array.isArray(numbers)) return;

  return numbers.map(
    (number, index) =>
      `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`
  );
};

console.log(getDetailsByMap(arrayOfNumbers));
