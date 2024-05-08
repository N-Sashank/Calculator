let displayEl = document.getElementById("Display");

function appendToDisplay(a) {
  displayEl.innerText += a;
}
function clearScreen() {
  displayEl.innerText = " ";
}
function solve() {
  try {
    displayEl.innerText = eval(displayEl.innerText);
  } catch (error) {
    displayEl.innerText = "Error";
  }
}
   
