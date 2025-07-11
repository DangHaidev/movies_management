const params = new URLSearchParams(window.location.search);
const BASE_URL = "http://localhost:5001";

async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`${BASE_URL}/api/movie/${movieId}`);
    if (!response.ok) {
      console.error("Failed to fetch movie details:", response.statusText);
    }
    const movie = await response.json();

    document.getElementById("id").value = movie.id;
    document.getElementById("title").value = movie.title;
    document.getElementById("genre").value = movie.genre;
    document.getElementById("releaseYear").value = movie.releaseYear;
    document.getElementById("director").value = movie.director;
    document.getElementById("description").value = movie.description;
    document.getElementById("PosterUrl").value = movie.posterUrl;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

// Hàm gửi dữ liệu cập nhật
function updateMovie() {
  const updatedMovie = {
    title: document.getElementById("title").value.trim(),
    genre: document.getElementById("genre").value.trim(),
    releaseYear: parseInt(document.getElementById("releaseYear").value),
    director: document.getElementById("director").value.trim(),
    description: document.getElementById("description").value.trim(),
    posterUrl: document.getElementById("PosterUrl").value.trim()
  };

  console.log("Updating movie:", updatedMovie);

  fetch(`${BASE_URL}/api/movie/${movieId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedMovie)
  })
  .then(res => {
    if (!res.ok) throw new Error("Failed to update movie.");
    return res.json();
  })
  .then(data => {
    alert("Cập nhật thành công!");
    window.location.href = "index.html"; // quay lại trang chính
  })
  .catch(err => {
    console.error("Update failed:", err);
    alert("Cập nhật thất bại!");
  });
}

 document.getElementById("update-movie-form").addEventListener("submit", function (e) {
    e.preventDefault(); // ❗ ngăn reload
    updateMovie();      // ✅ gọi hàm update
  });

const movieId = params.get("id");
fetchMovieDetails(movieId);
console.log("Movie ID:", movieId);
