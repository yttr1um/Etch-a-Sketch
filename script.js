let container = document.querySelector("#container");
let colorSelector = document.querySelector("#color-selector");
let mouseDown = false;

document.body.onmousedown = () => { 
    mouseDown = true;
    console.log(mouseDown);
}
document.body.onmouseup = () => {
    mouseDown = false;
    console.log(mouseDown)
}

for (let i = 1; i < 16*16; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
}

let pixels = document.querySelectorAll(".pixel");

for (let i = 0; i <= pixels.length; i++) {
    if (mouseDown) pixels[i].style.background = colorSelector.value;
    pixels[i]?.addEventListener("mouseover", () => {
        if (mouseDown) {
            pixels[i].style.background = colorSelector.value;
        }
    })

}