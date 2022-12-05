"use strict";

/*Функция принимает строку и проверяет её на палиндром. 
В случае, если строка является палиндромом, возвращает true, иначе false */

const isPalindromeByArray = (string) => {
  const arrayFromString = string.toLowerCase().split("");
  const reversedArray = arrayFromString.slice().reverse();

  for (let i = 0; i < arrayFromString.length; i++) {
    return arrayFromString[i] === reversedArray[i];
  }
};

console.log(isPalindromeByArray("шAлаШ"));

const isPalindromeByUnicode = (string) =>
  [...string].reverse().join("").toLowerCase() === string.toLowerCase();

console.log(isPalindromeByUnicode("ШалAш"));
