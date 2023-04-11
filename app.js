"use strict";

console.log("Let's get this party started!");

function showGif(embedUrl) {
  let image = $("<img>");
  image.attr("src", embedUrl);
  $(".gifArea").append(image);
}

async function getGif() {
  let searchTerm = $(".form-control").val(); // add better selector
  console.log(searchTerm)

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { api_key: "bOY1occvaLmI2V96PG2W24g34r4FBgOk", q: searchTerm, limit: 1 } });

  console.log("getGif response = ", response);
  showGif(response.data.embed_url);
}

$(".btn-primary").on("click", getGif());