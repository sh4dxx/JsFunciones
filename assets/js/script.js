const ele = document.getElementById("ele1");
const color = 'green';

pintar = (elemento, color) => {
  elemento.style.backgroundColor = color
}

pintar(ele, color);

ele.addEventListener("click", ()=>{
  // ele.style.backgroundColor = "yellow";
  pintar(ele, "yellow");
});
