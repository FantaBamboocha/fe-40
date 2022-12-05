"use strict";

// Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив, где буквы,
// которые были в нижнем регистре, станут в верхнем, а в верхнем - станут в нижнем

const arrayOfLetters = ["A", "b", "C", "d", "E"];

const changeRegisterByFor = (letters) => {
  if (!Array.isArray(letters)) return;

  const changedArrayOfLetters = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    letter === letter.toUpperCase()
      ? changedArrayOfLetters.push(letter.toLowerCase())
      : changedArrayOfLetters.push(letter.toUpperCase());
  }
  return changedArrayOfLetters;
};

console.log(changeRegisterByFor(arrayOfLetters));

const changeRegisterByWhile = (letters) => {
  if (!Array.isArray(letters)) return;

  const changedArrayOfLetters = [];
  let i = 0;

  while (letters[i]) {
    const letter = letters[i];

    letter === letter.toUpperCase()
      ? changedArrayOfLetters.push(letter.toLowerCase())
      : changedArrayOfLetters.push(letter.toUpperCase());
    i++;
  }
  return changedArrayOfLetters;
};

console.log(changeRegisterByWhile(arrayOfLetters));

const changeRegisterByForEach = (letters) => {
  if (!Array.isArray(letters)) return;

  const changedArrayOfLetters = [];

  letters.forEach((letter) => {
    letter === letter.toUpperCase()
      ? changedArrayOfLetters.push(letter.toLowerCase())
      : changedArrayOfLetters.push(letter.toUpperCase());
  });
  return changedArrayOfLetters;
};

console.log(changeRegisterByForEach(arrayOfLetters));

const changeRegisterByMap = (letters) => {
  if (!Array.isArray(letters)) return;

  return letters.map((letter) => {
    return letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase();
  });
};

console.log(changeRegisterByMap(arrayOfLetters));
