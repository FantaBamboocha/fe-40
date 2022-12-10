"use strict";

/* Функция принимает массив пользователей. Возвращает объект, состоящий из двух полей: women и men. Данные
  поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
 Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName, в котором 
 будут объеденины убранные поля (first_name и last_name).   women  men
 */

const userList = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 3,
    first_name: "Michael",
    last_name: "Jordan",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 6,
    first_name: "Zhanna",
    last_name: "Friske",
    email: "gfrediani1@senate.gov",
    gender: "Female",
    ip_address: "229.179.4.212",
  },
  {
    id: 10,
    first_name: "Petr",
    last_name: "Cech",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const convertToObject = (users) => {
  return users.reduce(
    (result, { first_name, last_name, gender, ...rest }) => {
      const userToPush = {
        fullName: `${first_name} ${last_name}`,
        ...rest,
      };
      const isMan = gender === "Male";
      const userGender = isMan ? "men" : "women";

      result[userGender].push(userToPush);

      return result;
    },
    { men: [], women: [] }
  );
};

console.log(convertToObject(userList));
