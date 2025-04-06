let container = document.querySelector("#container");
let colorSelector = document.querySelector("#color-selector");
let dimension = document.querySelector("#dimensions");
let enterBtn = document.querySelector("#enter-btn");
let mouseDown = false;

document.body.onmousedown = () => { 
    mouseDown = true;
}
document.body.onmouseup = () => {
    mouseDown = false;
}

function loadPixels() {
    for (let i = 1; i <= dimension.value; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for (let j = 1; j <= dimension.value; j++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
    }
}

function drawing() {
    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => {
        pixel?.addEventListener("mousedown", () => {
            pixel.style.background=colorSelector.value;
        })

        pixel?.addEventListener("mouseover", () => {
            if (mouseDown) {
                pixel.style.background = colorSelector.value;
            }
        })
    })
}

loadPixels();
drawing();

enterBtn.addEventListener("click", ()=> {
    //remove current pixels
    let divs = document.querySelectorAll("#container > div");
    Array.from(divs).forEach(element => {
        element.remove();
    })

    loadPixels();
    drawing();
});