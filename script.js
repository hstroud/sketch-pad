const sketchBox = document.getElementById("main-sketch-box");


for (let i = 0; i < 256; i++) {
    let drawSquare = document.createElement("div");
    drawSquare.classList.add("drawingSquare");

    drawSquare.addEventListener("mouseover", function() {
        drawSquare.style.backgroundColor = "black"
    });

    sketchBox.append(drawSquare);
}

function createNewGrid() {
    sketchDivs = document.querySelectorAll(".drawingSquare");

    sketchDivs.forEach((sketchDiv) => {
        sketchDiv.style.backgroundColor = "white"
    });
}


