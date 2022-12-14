"use strict";

// Функция принимает массив чисел и должна вернуть число, которое встречается больше всего раз.

const numbersList = [1, 2, 3, 2, 1, 2, 3, 4, 2, 4, 2, 4, 1, 2];

const findMostFrequent = (numbers) => {
  const countNumbersObject = numbers.reduce((result, number) => {
    if (!result[number]) {
      result[number] = 1;
    } else {
      result[number] += 1;
    }

    return result;
  }, {});

  const entries = Object.entries(countNumbersObject);

  const mostFrequent = entries.sort(
    ([previousNumber, previousQuantity], [nextNumber, nextQuantity]) =>
      nextQuantity - previousQuantity
  );

  return mostFrequent[0][0];
};

console.log(findMostFrequent(numbersList));
