const params = new URLSearchParams(window.location.search);
const BASE_URL = "http://localhost:5001";

async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`${BASE_URL}/api/movie/${movieId}`);
    if (!response.ok) {
      console.error("Failed to fetch movie details:", response.statusText);
    }
    const movie = await response.json();
    console.log("Movie details:", movie);
    // You can now use the movie details to populate your form or display them
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

const movieId = params.get("id");
fetchMovieDetails(movieId);
console.log("Movie ID:", movieId);
