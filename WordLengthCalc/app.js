let btn = document.querySelector(".btn");
let output = document.querySelector(".output");

//Event Listener

btn.addEventListener("click", function () {
  let str = document.querySelector(".word").value;
  output.innerText = str.length;
});
