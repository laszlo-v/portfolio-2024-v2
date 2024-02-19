export const asideToggle = (asideButton, aside, logoMail, main) => {
 
  asideButton.addEventListener("click", () => {
    aside.classList.toggle("toggle");
    logoMail.classList.toggle("toggle");
    main.classList.toggle("toggle");
  });
};
