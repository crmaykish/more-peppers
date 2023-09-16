var peppers = 0;
var dollars = 10;
var logCount = 0;

function shopHandler() {
    alert("TODO: Add a farmhand");
}

function upgradeHandler() {
    alert("TODO: Add upgrade 1");
}

function clickHandler() {
    peppers++;
    document.getElementById("labelPeppers").innerText = ("Peppers: " + peppers);

    if (peppers == 10) {
        addLog("Grew ten peppers!");

        farmhandButton = document.createElement("button");
        farmhandButton.type = "button";
        farmhandButton.textContent = "Farmhand";

        document.getElementById("divStore").appendChild(farmhandButton);

        farmhandButton.addEventListener("click", shopHandler);

    }
    else if (peppers == 100) {
        addLog("Grew one hundred peppers!");

        upgradeButton = document.createElement("button");
        upgradeButton.type = "button";
        upgradeButton.textContent = "Upgrade 1";

        document.getElementById("divUpgrade").appendChild(upgradeButton);

        upgradeButton.addEventListener("click", upgradeHandler);
    }
}

document.querySelector('#btnClicker').addEventListener("click", clickHandler);

function addLog(message) {
    // var timestamp = new Date(Date.now()).toISOString();
    logCount++;
    document.getElementById("txtLog").value += (logCount + ": " + message + "\n");
}

function start() {
    addLog("Pick some peppers!");
}

start();