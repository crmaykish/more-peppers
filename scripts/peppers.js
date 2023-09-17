const GAME_VERSION = "v0.0";

// Game State
var peppersCurrent = 0;
var peppersLifetime = 0;
var farmHandsUnlocked = false;
var farmhandCount = 0;
var farmhandCost = 10;

var upgrade1Unlocked = false;
var upgrade1Cost = 100;

var clickMultiplier = 1.0;

// Game Control
var tickRateHz = 10;
var tickDelayMS = 1000 / tickRateHz;

// UI Elements
var buttonPick = document.querySelector('#btnClicker');
var labelPeppers = document.getElementById("labelPeppers");
var textLog = document.getElementById("txtLog");

var farmhandButton;
var upgradeButton;

function drawPepperCount() {
    labelPeppers.innerText = ("Peppers: " + Math.floor(peppersCurrent));
}

function shopHandler() {
    if (peppersCurrent >= farmhandCost) {
        peppersCurrent -= farmhandCost;
        farmhandCount++;
        farmhandCost = Math.floor(farmhandCost * 1.10);

        farmhandButton.textContent = (farmhandCount + " Farmhands (Cost: " + farmhandCost + ")");

        drawPepperCount();
    }
}

function upgradeHandler() {
    if (peppersCurrent >= upgrade1Cost) {
        peppersCurrent -= upgrade1Cost;
        clickMultiplier *= 2;

        upgradeButton.remove();

        drawPepperCount();
    }
}

function clickHandler() {
    peppersCurrent += clickMultiplier;
    peppersLifetime += clickMultiplier;

    drawPepperCount();
}

buttonPick.addEventListener("click", clickHandler);

function clearLog() {
    textLog.value = "";
}

function addLog(message) {
    var timestamp = new Date(Date.now()).toISOString();
    textLog.value += (timestamp + ": " + message + "\n");
    textLog.scrollTop = textLog.scrollHeight;
}

function tick() {
    var increment = 0;
    if (farmhandCount != 0) {
        increment += (farmhandCount / tickRateHz);
    }

    peppersCurrent += increment;
    peppersLifetime += increment;

    if (peppersLifetime >= 10 && !farmHandsUnlocked) {
        addLog("Picked ten peppers!");

        farmHandsUnlocked = true;

        farmhandButton = document.createElement("button");
        farmhandButton.type = "button";
        farmhandButton.textContent = (farmhandCount + " Farmhands (Cost: " + farmhandCost + ")");

        document.getElementById("divStore").appendChild(farmhandButton);

        farmhandButton.addEventListener("click", shopHandler);

    }
    else if (peppersLifetime >= 100 && !upgrade1Unlocked) {
        addLog("Picked one hundred peppers!");

        upgrade1Unlocked = true;

        upgradeButton = document.createElement("button");
        upgradeButton.type = "button";
        upgradeButton.textContent = "Upgrade 1";

        document.getElementById("divUpgrade").appendChild(upgradeButton);

        upgradeButton.addEventListener("click", upgradeHandler);
    }

    drawPepperCount();
}

function start() {

    document.getElementById("gameVersion").innerText = GAME_VERSION;

    clearLog();

    addLog("Pick some peppers!");

    // Start the game loop
    setInterval(tick, tickDelayMS);
}

start();