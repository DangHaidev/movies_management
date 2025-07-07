const params = new URLSearchParams(window.location.search);
const BASE_URL = "http://localhost:5001";

// async function fetchMovieDetails(movieId) {
//   try {
//     const response = await fetch(`${BASE_URL}/api/movie/${movieId}`);
//     if (!response.ok) {
//       console.error("Failed to fetch movie details:", response.statusText);
//     }
//     const movie = await response.json();

//     document.getElementById("id").value = movie.id;
//     document.getElementById("title").value = movie.title;
//     document.getElementById("genre").value = movie.genre;
//     document.getElementById("year").value = movie.releaseYear;
//     document.getElementById("director").value = movie.director;
//     document.getElementById("description").value = movie.description;
//   } catch (error) {
//     console.error("Error fetching movie details:", error);
//   }
// }

// const movieId = params.get("id");
// fetchMovieDetails(movieId);
// console.log("Movie ID:", movieId);
