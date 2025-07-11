const BASE_URL = "http://localhost:5001";

let allMovies = [];

async function fetchMovies() {
  try {
    const response = await fetch(BASE_URL + "/api/movie");
    const data = await response.json();
    allMovies = data;
    renderMovieList(data);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phim:", error);
  }
}

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


function searchMovies() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(keyword)
    ||  movie.genre.toLowerCase().includes(keyword) 
  );
  renderMovieList(filtered);
}
searchButton.addEventListener("click", searchMovies);

// Hoặc cho phép tìm kiếm khi gõ Enter:
searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchMovies();
  }
});

function renderMovieList(movies) {
  const movieList = document.getElementById("movie-list");
  const movieCards = document.getElementById("movie-cards");
  const noResults = document.getElementById("no-results");
  movieList.innerHTML = ""; // xoá nội dung cũ
  movieCards.innerHTML = "";

if (movies.length === 0) {
    noResults.style.display = "block"; // Hiện thông báo
    return;
  } else {
    noResults.style.display = "none"; // Ẩn nếu có kết quả
  }

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

// Render dạng card
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.posterUrl}" alt="${movie.title} Poster" />
      <h3>${movie.title}</h3>
      <p><strong>Thể loại:</strong> ${movie.genre}</p>
      <p><strong>Năm:</strong> ${movie.releaseYear}</p>
      <p><strong>Đạo diễn:</strong> ${movie.director}</p>
      <p><strong>Mô tả:</strong> ${movie.description}</p>
      <div class="actions">
        <button class="btn-update" data-id="${movie.id}">Cập nhật</button>
        <button class="btn-delete" data-id="${movie.id}">Xóa</button>
      </div>
    `;
    movieCards.appendChild(card);

  });

  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll(".btn-delete").forEach((button) => {
    button.addEventListener("click", async function () {
      const id = this.getAttribute("data-id");
       const confirmDelete = confirm("Bạn có chắc chắn muốn xóa phim này?");
      if (!confirmDelete) return;
      try {
        await fetch(BASE_URL + `/api/movie/${id}`, { method: "DELETE" }).then(() => location.reload());
    alert("Phim đã được xóa thành công!");

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


searchInput.addEventListener("input", searchMovies);
// renderMovieList(movies);
fetchMovies();
