// window.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("toggle-btn");
//   const sidebar = document.querySelector(".side-bar");

//   toggleBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("collapsed");
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const sidebar = document.querySelector(".side-bar");

  // Tạo overlay nếu chưa có
  let overlay = document.querySelector(".overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
  }

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Ẩn sidebar khi bấm vào link
  document.querySelectorAll(".side-bar a").forEach(link => {
    link.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
