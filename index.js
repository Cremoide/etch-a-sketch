function gridMaker(rowItemNumber) {
    const container = document.querySelector("#container");
    const itemTotal = rowItemNumber * rowItemNumber + rowItemNumber;
    const mod = rowItemNumber + 1;

    for (var i = 1; i <= itemTotal; i++) {
    const div = document.createElement("div");

    if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    }

    container.appendChild(div);
    }
}

gridMaker(16);
