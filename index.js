// 16x16 grid of square divs
function gridMaker(rowItemNumber) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    // 25px box + 1px border
    container.style.width = `${rowItemNumber * 26}px`;
    container.style.display = "flex";
    container.style.flexWrap = "wrap";

  for (let i = 0; i < rowItemNumber * rowItemNumber; i++) {
    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    div.classList.add('cell')
    container.appendChild(div);
    }
}

gridMaker(16);

// Hover effect on the tiles when mouse goes over
const cell = document.querySelectorAll(".cell");

cell.forEach(cell => {
    cell.addEventListener("mouseenter", () => {
        console.log("Cell detected!");
        cell.style.background = "black";
    });
});

// for (let i = 0; i < cell.length; i++) {
//     cell[i].style.backgroundColor = "black";
// }

// cellNodeList.addEventListener("mouseenter", cellPaint);


// for (let i = 0; i < cell.length; i++) {
//     cell[i].style.backgroundColor = "black";
// }

// cellNodeList.addEventListener("mouseenter", cellPaint);

// element.addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });

// btn.onclick = () => {
//     const cellNodeList = document.querySelectorAll(".cell");

//     for (let i = 0; i < cell.length; i++) {
//         cell[i].style.backgroundColor = "black";
//     }
// };