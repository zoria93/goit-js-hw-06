const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener('click', () => {
  const color = body.style.backgroundColor = getRandomHexColor();
  text.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};