"use strict";

/* Написать функцию, которая принимает 2 аргумента: функицю и задержку. fn(request, timeout).
 Если время выполнения функции запроса больше, чем таймаут, твоя функция должна вернуть ошибку,
  если меньше, то результат ответа */

const fakeRequest = (response, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, delay);
  });
};

const raceRequest = (someRequest, timeout) => {
  const rejection = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Ops, error"));
    }, timeout);
  });

  return Promise.race([someRequest, rejection])
    .then((response) => console.log(response))
    .catch((error) => console.log(error.message));
};

raceRequest(fakeRequest("Success", 2000), 3000);
