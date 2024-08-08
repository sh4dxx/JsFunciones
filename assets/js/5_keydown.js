function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

function createDiv(color) {
    var newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.border = "2px solid black";
    newDiv.style.background = color;
    document.body.appendChild(newDiv);
}

function insertAfter(e,i){ 
  if(e.nextSibling){ 
      e.parentNode.insertBefore(i,e.nextSibling); 
  } else { 
      e.parentNode.appendChild(i); 
  }
}


const div = document.getElementById("key");
let color;

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        color = "pink";
    } else if (event.key === "s") {
        color = "orange";
    } else if (event.key === "d") {
        color = "aqua";
    } else if (event.key === "q") {
      createDiv('blueviolet')
    } else if (event.key === "w") {
      createDiv('darkgray')
    } else if (event.key === "e") {
      createDiv('peru')
    }
    pintar(div, color);
});
