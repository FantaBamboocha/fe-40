"use strict";

/* Функция принимает массив слов, возвращает новый массив слов, у которых первая буква большая, остальные маленькие. 

Пример: fn([‘hello’, ‘wOrLd’]) // [‘Hello’, ‘World’]; */

const toCapitalizeByMap = (words) => {
  return words.map((word) => {
    const firstUpperLetter = word[0].toUpperCase();
    const lowerCaseWord = word.slice(1).toLowerCase();
    const capitalizeWord = firstUpperLetter + lowerCaseWord;

    return capitalizeWord;
  });
};

const toCapitalizeByReduce = (words) => {
  return words.reduce((result, word) => {
    const lowerCaseWord = word.toLowerCase();
    const firstUpperLetter = word[0].toUpperCase();
    const capitalizeWord = lowerCaseWord.replace(
      lowerCaseWord[0],
      firstUpperLetter
    );

    result.push(capitalizeWord);

    return result;
  }, []);
};

console.log(
  toCapitalizeByMap(["hello", "wOrLd", "jAvAscRipT", "TEACHmeSKILLS"])
);
console.log(
  toCapitalizeByReduce(["hello", "wOrLd", "jAvAscRipT", "TEACHmeSKILLS"])
);
