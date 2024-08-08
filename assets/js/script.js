const ele = document.getElementById("ele1");
const color = 'green';

function pintar(elemento, color) {
  elemento.style.backgroundColor = color
}

pintar(ele, color);

ele.addEventListener("click", function() {
  // ele.style.backgroundColor = "yellow";
  pintar(ele, "yellow");
});
