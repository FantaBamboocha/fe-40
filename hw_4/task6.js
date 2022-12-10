"use strict";

/* Написать функцию, которая принимает строку и допустимое количество символов. Если длина строки превышает допустимое 
количество символов, функция должна обрезать строку, а в конец  добавить многоточие */

// fn(‘Hello’, 3) // ‘Hel…’

const shortString = (someString, symbols) =>
  someString.slice(0, symbols) + "...";

console.log(shortString("Написать функцию, которая принимает строку", 22));
