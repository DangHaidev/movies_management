const BASE_URL = "http://localhost:5001";

const addMovieForm = document.getElementById("add-movie-form");
addMovieForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Ngăn chặn hành động mặc định của form

  const formData = new FormData(addMovieForm);
  const movieData = Object.fromEntries(formData.entries());
console.log("Submitted movie data:", movieData);
  try {
    const response = await fetch(BASE_URL + "/api/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    });

    if (!response.ok) {
      throw new Error("Failed to add movie");
    }

    const result = await response.json();
    console.log("Movie added successfully:", result);
    alert("Phim đã được thêm thành công!");
    addMovieForm.reset(); // Reset form after successful submission
  } catch (error) {
    console.error("Error adding movie:", error);
    alert("Đã xảy ra lỗi khi thêm phim. Vui lòng thử lại.");
  }
});

