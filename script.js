const sketchBox = document.getElementById("main-sketch-box");
let numOfSquares = 16;

function createSquares(numOfSquare) {
    
    let squareSize = 700 / numOfSquare;
    let squareSizeString = squareSize.toString() + "px"
    numOfSquare *= numOfSquare;

    for (let i = 0; i < numOfSquare; i++) {
        let drawSquare = document.createElement("div");
        drawSquare.classList.add("drawingSquare");
        drawSquare.style.height = squareSizeString;
        drawSquare.style.width = squareSizeString;
    
        drawSquare.addEventListener("mouseover", function() {
            drawSquare.style.backgroundColor = "black"
        });
    
        sketchBox.append(drawSquare);
    }
}

createSquares(numOfSquares);


function createNewGrid() {
    sketchDivs = document.querySelectorAll(".drawingSquare");
    sketchDivs.forEach((sketchDiv) => {
        sketchDiv.remove();
    });

    numOfSquares = prompt("Enter the dimensions for the new grid (ex: enter 64 to produce a grid that is 64x64");
    createSquares(numOfSquares);

}


