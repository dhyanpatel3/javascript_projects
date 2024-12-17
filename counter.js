// Select elements
const counterDisplay = document.getElementById("counter");
const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const resetButton = document.getElementById("reset");

// Initialize counter value
let counterValue = 0;

// Update counter display
function updateCounter() {
  counterDisplay.textContent = counterValue;
}

// Add button functionality
addButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

// Remove button functionality
removeButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
  }
});

// Reset button functionality
resetButton.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});
