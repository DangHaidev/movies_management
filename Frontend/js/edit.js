const params = new URLSearchParams(window.location.search);

const movieId = params.get("id");
console.log("Movie ID:", movieId);