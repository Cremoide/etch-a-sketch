// Popup button for the new grid
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    let userInput = prompt("How big you want your grid?", "1-100");

    e = Number(userInput);

    if (Number.isNaN(e)) {
        alert("Sadly, I can only take numbers from you.");
        getInput();
    }
    if (userInput <= 0) {
        alert("C'mon you know you can do better than that!");
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

// Grid of tile divs
function gridMaker(rowItemNumber) {
    const container = document.querySelector("#container");
    container.textContent = "";

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const cellWidth = Math.floor(containerWidth / rowItemNumber)
    const cellHeight = Math.floor(containerHeight / rowItemNumber)

    // Tile generation
    for (let i = 0; i < rowItemNumber * rowItemNumber; i++) {
    const cell = document.createElement("div");

    console.log(`Tile Width: ${Math.floor(containerWidth / rowItemNumber)}px`);
    console.log(`Tile Height: ${Math.floor(containerHeight / rowItemNumber)}px`);

    cell.style.cssText = `height: ${cellHeight}; width: ${cellHeight}px`;
    cell.classList.add('cell')
    container.appendChild(cell);
    }

    // Hover effect on the tiles when mouse goes over
    let cell = document.querySelectorAll(".cell");

    cell.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            console.log("Cell detected!");
            cell.style.background = "black";
        });
    });
};

gridMaker(16);