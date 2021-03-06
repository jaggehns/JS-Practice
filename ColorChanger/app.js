//Colors Array

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "brown",
  "yellow",
  "purple",
  "black",
];
const button = document.querySelector(".button");

//Event Listener

button.addEventListener("click", function () {
  //randomizer
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  //get container
  const container = document.querySelector(".container");

  container.style.background = randomColor;
});
