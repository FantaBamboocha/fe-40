"use strict";

/* Ваша задача реализовать функцию-банкомат

Дан массив купюр со следующим номиналом banknotes = [1, 5, 10, 20, 50, 100, 500];
Количество банкнот не ограничено
Функция принимает число (сумму, которую хочет списать пользователь) возвращает массив банкнот с наибольшим номиналом


ATM(1000) // [500, 500]
ATM(1025) // [500, 500, 20, 5],
ATM(10) // 10
 */

const functionATM = (amountRequired) => {
  const banknotesAvailable = [1, 5, 10, 20, 50, 100, 500];
  const result = [];

  for (let i = banknotesAvailable.length - 1; i >= 0; i--) {
    let bill = banknotesAvailable[i];

    while (amountRequired - bill >= 0) {
      result.push(bill);
      amountRequired -= bill;
    }
  }

  return result;
};

console.log(functionATM(1025));
