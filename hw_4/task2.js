"use strict";

/* С помощью функции map, reduce вывести url объекта, у которого самая большая площадь */

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://api.netflix.com/catalog/titles/movies/70111470",
  },
  {
    width: 425,
    height: 150,
    url: "http://api.netflix.com/catalog/titles/movies/654356453",
  },
  {
    width: 300,
    height: 200,
    url: "http://api.netflix.com/catalog/titles/movies/11111111",
  },
  {
    width: 150,
    height: 200,
    url: "http://api.netflix.com/catalog/titles/movies/00000000",
  },
];

const getUrlByMap = (items) => {
  const objectsWithArea = items.map(({ width, height, url }) => {
    const objectWithArea = {
      area: width * height,
      url,
    };

    return objectWithArea;
  });

  const sortedArray = objectsWithArea.sort(
    ({ area: previousArea }, { area: nextArea }) => nextArea - previousArea
  );

  return sortedArray[0].url;
};

console.log(getUrlByMap(boxarts));

const getUrlByReduce = (items) => {
  const ObjectWithMaxArea = items.reduce((result, currentObject) => {
    const { width: resultWidth, height: resultHeight } = result;
    const { width: currentWidth, height: currentHeight } = currentObject;
    const resultArea = resultWidth * resultHeight;
    const currentArea = currentWidth * currentHeight;

    return resultArea > currentArea ? result : currentObject;
  });

  return ObjectWithMaxArea.url;
};

console.log(getUrlByReduce(boxarts));
