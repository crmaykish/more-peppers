var peppers = 0;
var dollars = 10;
var logCount = 0;

function upgradeHandler() {
    alert("TODO");
}

// function clickHandler() {
//     clicks++;
//     document.getElementById("labelPeppers").innerText = ("Peppers: " + clicks);

//     if (clicks == 10) {
//         addLog("Clicked ten times!");

//         upgradeButton = document.createElement("button");
//         upgradeButton.type = "button";
//         upgradeButton.textContent = "Upgrade 1";

//         document.getElementById("rightSide").appendChild(upgradeButton);

//         upgradeButton.addEventListener("click", upgradeHandler);

//     }
//     else if (clicks == 100) {
//         addLog("Clicked one hundred times!");
//     }
// }

// document.querySelector('#btnClicker').addEventListener("click", clickHandler);

function addLog(message) {
    // var timestamp = new Date(Date.now()).toISOString();
    logCount++;
    document.getElementById("txtLog").value += (logCount + ": " + message + "\n");
}

function start() {
    addLog("Click the button!");
}

start();