"use strict";

/*Функция принимает строку и проверяет её на палиндром. 
В случае, если строка является палиндромом, возвращает true, иначе false */

const isPalindromeByUnicode = (string) =>
  [...string].reverse().join("").toLowerCase() === string.toLowerCase();

console.log(isPalindromeByUnicode("шAлаШ"));
