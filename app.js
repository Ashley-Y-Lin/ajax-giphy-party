'use strict';

console.log("Let's get this party started!");

/** Declare global constants for accessing Giphy Api*/
const GIPHY_SEARCH_ENDPOINT = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'bOY1occvaLmI2V96PG2W24g34r4FBgOk';

/** Display gif in gif area.
 * Takes image URL as input
 * Creates and appends image element */
function showGif(embedUrl) {
  const image = $('<img>', { src: embedUrl });
  $('.gifArea').append(image);
}

/** Async function that creates HTTP request to Giphy API via Axios */
async function getGif() {
  const searchTerm = $('.form-control').val(); // add better selector
  console.log(searchTerm);

  const response = await axios.get(GIPHY_SEARCH_ENDPOINT, {
    params: {
      api_key: API_KEY,
      q: searchTerm,
      limit: 1,
    },
  });

  console.log('getGif response = ', response);
  showGif(response.data.data[0].images.original.url);
}

// sets event listener on submit button
$('.btn-primary').on('click', getGif);

// sets event listener on remove button
// when clicked, clears gif area
$('.btn-danger').on('click', function () {
  $('.gifArea').empty();
});
