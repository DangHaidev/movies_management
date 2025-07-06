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


async function fetchMovies() {
    const response = await fetch("http://localhost:3000/movies");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
}

const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
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
            <button class="btn-update" data-id="${movie.id}">Cập nhập</button>
            <button class="btn-delete">Xóa</button>
        </td>
    `;
  movieList.appendChild(row);
});

const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const row = this.parentElement.parentElement;
    row.remove();
  });
});

const updateButtons = document.querySelectorAll(".btn-update");
updateButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.getAttribute("data-id");
    window.location.href = `update.html?id=${id}`;
  });
});
