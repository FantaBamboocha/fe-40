"use strict";

/* Функция принимает 2 аргумента: 1 – массив имён, 2 – массив букв;
Если имя пользователя из первого массива начинается с буквы, которая 
есть во втором аргументе – этот пользователь не должен попасть в массив результата. */

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const filterUserListByFor = (users, arrayOfLetters) => {
  // мне не очень нравится такая проверка, но если писать условие в одну строку через &&,
  // а в качестве аргумента функции передать не массив, то эта проверка в любом случае вернет false,
  // и тело функции будет выполнятся дальше
  if (!Array.isArray(users)) return;
  if (!Array.isArray(arrayOfLetters)) return;
  const filteredUserList = [];
  for (let i = 0; i < userList.length; i++) {
    const user = users[i];
    if (
      typeof user === "string" &&
      !arrayOfLetters.includes(user[0].toLowerCase())
    ) {
      filteredUserList.push(user);
    }
  }
  return filteredUserList;
};

console.log(filterUserListByFor(userList, ["m", "v"]));

const filteredUserListByWhile = (users, arrayOfLetters) => {
  if (!Array.isArray(users)) return;
  if (!Array.isArray(arrayOfLetters)) return;
  const filteredUserList = [];
  let i = 0;
  while (users[i]) {
    const user = users[i];
    if (
      typeof user === "string" &&
      !arrayOfLetters.includes(user[0].toLowerCase())
    ) {
      filteredUserList.push(user);
    }
    i++;
  }
  return filteredUserList;
};

console.log(filteredUserListByWhile(userList, ["m", "v"]));

const filteredUserListByForEach = (users, arrayOfLetters) => {
  if (!Array.isArray(users)) return;
  if (!Array.isArray(arrayOfLetters)) return;
  const filteredUserList = [];
  users.forEach((user) => {
    if (
      typeof user === "string" &&
      !arrayOfLetters.includes(user[0].toLowerCase())
    ) {
      filteredUserList.push(user);
    }
  });
  return filteredUserList;
};

console.log(filteredUserListByForEach(userList, ["m", "v"]));

const filterUserListByMethodFilter = (users, arrayOfLetters) => {
  if (!Array.isArray(users)) return;
  if (!Array.isArray(arrayOfLetters)) return;
  return users.filter((user) => {
    if (typeof user === "string") {
      const firstLetter = user[0].toLowerCase();
      return !arrayOfLetters.includes(firstLetter);
    }
  });
};

console.log(filterUserListByMethodFilter(userList, ["m", "v"]));
