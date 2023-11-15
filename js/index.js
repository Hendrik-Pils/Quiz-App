console.clear();

const bodyElement = document.querySelector('[data-js="body"]', '[data-js="nav"]', '[data-js="header"]');


const toggleButton = document.querySelector('[data-js="toggle__button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});



