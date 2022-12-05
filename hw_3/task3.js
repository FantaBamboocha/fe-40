"use strict";

/* Функция принимает массив объектов пользователей первым параметром, вторым параметром 
принимает массив строк (id). Функция должна удалить всех пользователей, чьи id 
будут найдены в массиве id, и вернуть массив с оставшимися пользователями */

const userList = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Tomara" },
  { id: 3, name: "Max" },
  { id: 1, name: "Valera" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Slavik" },
];

const removeUsers = (users, idArray) => {
  return users.filter(({ id }) => {
    return !idArray.includes(id);
  });
};

console.log(removeUsers(userList, [1, 3]));
