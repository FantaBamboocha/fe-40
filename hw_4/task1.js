"use strict";

/* Дан массив объектов. Необходимо создать функцию, возвращающую объект вида:
{"id": "title", "id": "title", ... }
*/

const videos = [
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
];

const convertArrayToObject = (arrayOfVideos) =>
  arrayOfVideos.reduce((result, { id, title }) => {
    result[id] = title;

    return result;
  }, {});

// I didn't check for the existence of the properties, because the same id cannot exist

console.log(convertArrayToObject(videos));
