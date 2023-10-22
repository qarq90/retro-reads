document.addEventListener("DOMContentLoaded", function () {
  const scrollToTop = document.getElementById("page-top-btn");

  scrollToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
