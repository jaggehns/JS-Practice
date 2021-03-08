const light = document.querySelector("#lightbulb");

//Event Listener
light.addEventListener("click", function () {
  light.classList.toggle("bulb-on");
});
