"use strict";

/* Функция принимает 2 аргумента: 1 – массив имён, 2 – массив букв;
Если имя пользователя из первого массива начинается с буквы, которая 
есть во втором аргументе – этот пользователь не должен попасть в массив результата. */

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const filterUserListByFor = (users, arrayOfLetters) => {
  if (!Array.isArray(users) || !Array.isArray(arrayOfLetters)) return;

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

const filterUserListByWhile = (users, arrayOfLetters) => {
  if (!Array.isArray(users) || !Array.isArray(arrayOfLetters)) return;

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

console.log(filterUserListByWhile(userList, ["m", "v"]));

const filterUserListByForEach = (users, arrayOfLetters) => {
  if (!Array.isArray(users) || !Array.isArray(arrayOfLetters)) return;

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

console.log(filterUserListByForEach(userList, ["m", "v"]));

const filterUserListByMethodFilter = (users, arrayOfLetters) => {
  if (!Array.isArray(users) || !Array.isArray(arrayOfLetters)) return;

  return users.filter((user) => {
    if (typeof user === "string") {
      const firstLetter = user[0].toLowerCase();

      return !arrayOfLetters.includes(firstLetter);
    }
  });
};

console.log(filterUserListByMethodFilter(userList, ["m", "v"]));
