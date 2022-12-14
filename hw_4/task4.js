"use strict";

/* Функция принимает объект с неограниченным количеством полей. Результатом выполнения функции должен быть объект, в 
котором были отсеяны поля со значениями null или undefined */

const someObject = {
  a: 1,
  b: "Hello",
  c: null,
  z: undefined,
  name: "alex",
  age: 10,
  friends: [],
  address: null,
};

const clearObject = (object) => {
  const entries = Object.entries(object);

  const filteredEntries = entries.filter(([key, value]) => {
    const currentValue = value ?? false;

    return currentValue;
  });

  return Object.fromEntries(filteredEntries);
};

console.log(clearObject(someObject));
