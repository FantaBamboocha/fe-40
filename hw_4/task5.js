"use strict";

// Функция принимает массив чисел, а возвращает число, которое встречается лишь 1 раз.

const someNumbers = [1, 1, 2, 3, 3, 3, 4, 4]; // 2

const getUniqueNumber = (numbers) =>
  numbers.find(
    (number, _, numbers) =>
      numbers.indexOf(number) === numbers.lastIndexOf(number)
  );

console.log(getUniqueNumber(someNumbers));
