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
    container.appendChild(div);
    }
}

gridMaker(16);
