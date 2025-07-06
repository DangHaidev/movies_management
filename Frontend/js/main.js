const BASE_URL = "http://localhost:5001";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Khoa học viễn tưởng",
    releaseYear: 2010,
    director: "Christopher Nolan",
    description: "Dom Cobb là một chuyên gia đánh cắp tiềm thức...",
    posterUrl: "https://placehold.co/60x90",
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Khoa học viễn tưởng",
    releaseYear: 2014,
    director: "Christopher Nolan",
    description: "Một nhóm nhà du hành vũ trụ du hành qua hố sâu không gian...",
    posterUrl: "https://placehold.co/60x90",
  },
  {
    id: 3,
    title: "Parasite",
    genre: "Tâm lý, Xã hội",
    releaseYear: 2019,
    director: "Bong Joon-ho",
    description: "Gia đình nghèo chen chân vào nhà giàu...",
    posterUrl: "https://placehold.co/60x90",
  },
];

// async function fetchMovies() {
//   try {
//     const response = await fetch(BASE_URL + "/api/movie");
//     const data = await response.json();
//     renderMovieList(movies);
//   } catch (error) {
//     console.error("Lỗi khi lấy danh sách phim:", error);
//   }
// }

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

function renderMovieList(movies) {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // xoá nội dung cũ nếu có
  movies.forEach((movie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${movie.posterUrl}" alt="${movie.title} Poster" class="movie-poster"></td>
            <td>${movie.title}</td> 
            <td>${movie.genre}</td>
            <td>${movie.releaseYear}</td>
            <td>${movie.director}</td>
            <td>${movie.description}</td>
            <td>
                <button class="btn-update" data-id="${movie.id}">Cập nhật</button>
                <button class="btn-delete" data-id="${movie.id}">Xóa</button>
            </td>
        `;
    movieList.appendChild(row);
  });

  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll(".btn-delete").forEach((button) => {
    button.addEventListener("click", async function () {
      const id = this.getAttribute("data-id");
      try {
        await fetch(BASE_URL + `/api/movie/${id}`, { method: "DELETE" });
      } catch (error) {
        console.error("Lỗi khi xóa phim:", error);
      }
    });
  });

  document.querySelectorAll(".btn-update").forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      window.location.href = `update.html?id=${id}`;
    });
  });
}

renderMovieList(movies);
