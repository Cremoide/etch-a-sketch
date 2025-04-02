// Popup button for the new grid
const canvasBtn = document.querySelector("#canvasBtn");

canvasBtn.addEventListener("click", (e) => {
    let userInput = prompt("How big you want your grid?", "1-100");

    e = Number(userInput);

    if (Number.isNaN(e)) {
    alert("Sadly I can only take numbers from you.");
    getInput();
    }
    if (userInput <= 0) {
    alert("C'mon, you know you can do better than that!");
    console.log(e);
    return e;
    }
    if (userInput > 100) {
    console.log(e);
    alert("Beep-bop! Toaster can't go over 100x100 grid size.");
    console.log(e);
    return e;
    } else {
    gridMaker(e);
    }
});

// Button for activating random color
const colorBtn = document.querySelector("#colorBtn");

colorBtn.addEventListener("click", (e) => {
    if (e.target.textContent === `Random colors?`) {
        rainbowPaint();
        colorBtn.textContent = `Back to black?`;
    } else if (e.target.textContent === `Back to black?`) {
        colorBtn.textContent = `Random colors?`;
        blackPaint();
    }
});

// Grid of tile divs
function gridMaker(rowItemNumber) {
    const container = document.querySelector("#container");
    container.textContent = "";

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const cellWidth = containerWidth / rowItemNumber;
    const cellHeight = containerHeight / rowItemNumber;

    // Tile generation
    for (let i = 0; i < rowItemNumber * rowItemNumber; i++) {
    const cell = document.createElement("div");

    cell.style.cssText = `height: ${cellHeight}; width: ${cellHeight}px`;
    cell.classList.add("cell");
    container.appendChild(cell);
    }

    blackPaint();
}

gridMaker(16);


// PAINTING MODES

// Hover effect on the tiles when mouse is over
function blackPaint() {
    let cell = document.querySelectorAll(".cell");

    cell.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.background = "black";
        });
    });
}

// Hover RAINBOW on tiles when mouse is over
function rainbowPaint() {
    let cell = document.querySelectorAll(".cell");

    cell.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {

            function getRandomColor() {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                return `rgb(${r}, ${g}, ${b})`;
            }
            cell.style.background = getRandomColor();
        });
    });
}

// Hover PICTOCHAT on tiles when mouse is over (WorkInProgress)
function pictoChatPaint() {
    let cell = document.querySelectorAll(".cell");

    cell.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
                let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
                for(var i = 0; i < colors.length; i ++) {
                    cell.style.background = colors[i];
                }
        });
    });
}