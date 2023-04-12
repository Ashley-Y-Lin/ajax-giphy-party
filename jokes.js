"use strict";

const ICANHASDADJOKE_ENDPOINT = "https://icanhazdadjoke.com/";

async function getJoke() {
  const response = await axios.get(
    ICANHASDADJOKE_ENDPOINT,
    {
      headers: {
        Accept: "application/json"
      }
    }
  );
  console.log('getJoke response = ', response);
  //displayJoke
}

getJoke();