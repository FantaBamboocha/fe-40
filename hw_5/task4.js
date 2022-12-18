"use strict";

/* Дан массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, предполагая, 
что только перчатки одного цвета могут образовывать пары.*/

const getPairQuantity = (arrayOfGloves) => {
  const glovesCollection = arrayOfGloves.reduce((result, color) => {
    if (!result[color]) {
      result[color] = 1;
    } else {
      result[color] += 1;
    }

    return result;
  }, {});

  const glovesQuantity = Object.values(glovesCollection);

  return glovesQuantity.reduce((pairQuantity, quantity) => {
    if (quantity < 2) return pairQuantity;

    pairQuantity += Math.floor(quantity / 2);

    return pairQuantity;
  }, 0);
};

console.log(
  getPairQuantity([
    "red",
    "green",
    "red",
    "black",
    "blue",
    "blue",
    "red",
    "black",
  ])
);
