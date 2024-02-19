const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const scroll = () => {
  const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
      backToTopButton.addEventListener("click", scrollToTop);
    } else {
      backToTopButton.style.display = "none";
    }
}