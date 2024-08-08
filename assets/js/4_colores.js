const divBlue = document.getElementById("blue");
const divRed = document.getElementById("red");
const divGreen = document.getElementById("green");
const divYellow = document.getElementById("yellow");

function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

let blackColor = "black";
divBlue.addEventListener("click", ()=>{
  pintar(divBlue, blackColor)
});

divRed.addEventListener("click", () =>{
  pintar(divRed, blackColor)
});

divGreen.addEventListener("click", ()=>{
  pintar(divGreen,blackColor)
});
divYellow.addEventListener("click", ()=>{
  pintar(divYellow, blackColor)
});
