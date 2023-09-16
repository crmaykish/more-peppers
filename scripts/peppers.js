var peppers = 0;
var dollars = 10;
var logCount = 0;

var farmHandsUnlocked = false;
var farmhandCount = 0;
var farmhandCost = 10;

var farmhandButton;

function drawPepperCount() {
    document.getElementById("labelPeppers").innerText = ("Peppers: " + peppers);
}

function shopHandler() {
    if (peppers >= farmhandCost) {
        peppers -= farmhandCost;
        farmhandCount++;
        farmhandCost = Math.floor(farmhandCost * 1.10);

        farmhandButton.textContent = (farmhandCount + " Farmhands (Cost: " + farmhandCost + ")");

        drawPepperCount();
    }
}

function upgradeHandler() {
    alert("TODO: Add upgrade 1");
}

function clickHandler() {
    peppers++;

    drawPepperCount();

    if (peppers >= 10 && !farmHandsUnlocked) {
        addLog("Grew ten peppers!");

        farmHandsUnlocked = true;

        farmhandButton = document.createElement("button");
        farmhandButton.type = "button";
        farmhandButton.textContent = (farmhandCount + " Farmhands (Cost: " + farmhandCost + ")");

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

function tick() {
    if (farmhandCount != 0) {
        peppers += farmhandCount;
    }

    drawPepperCount();
}

function start() {
    addLog("Pick some peppers!");

    setInterval(tick, 1000);
}

start();