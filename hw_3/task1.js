"use strict";

/* Функция принимает массив чисел, возвращает новый массив, в котором все чётные числа получили + 1, а нечётные -1. 
Использовать метод map
Пример: fn([1,2,3]) // [0, 3, 2].  */

const changeToOne = (numbers) =>
  numbers.map((number) => (number % 2 === 0 ? ++number : --number));

console.log(changeToOne([1, 2, 3, 4, 5, 6, 7, 8]));
