"use strict";

const myRequest = async () => {
  try {
    const { results } = await fetch("https://pokeapi.co/api/v2/pokemon").then(
      (response) => response.json()
    );

    console.log(results);

    const arrayOfPromises = await results.map(({ url }) => {
      return fetch(`${url}`).then((response) => response.json());
    });

    const result = await Promise.all(arrayOfPromises);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

myRequest();
