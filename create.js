let currentValue = ""; // Stores the first operand
let lastOperator = ""; // Stores the last operator clicked

// Function to update the display with the clicked number or decimal
function appendtodisplay(value) {
  const display = document.getElementById("display");

  // If a new number is entered after an operator, clear the display
  if (lastOperator && display.value === currentValue) {
    display.value = "";
  }

  display.value += value; // Append the clicked value to the display
}

// Function to handle operator buttons (+, -, *, /)
function operators(operator) {
  const display = document.getElementById("display");

  // If there is already a current value and operator, calculate the intermediate result
  if (currentValue && lastOperator) {
    const result = calculateIntermediate(
      parseFloat(currentValue),
      parseFloat(display.value),
      lastOperator
    );
    currentValue = result.toString(); // Update current value with result
    display.value = currentValue; // Show intermediate result
  } else {
    currentValue = display.value; // Store the current display value
  }

  lastOperator = operator; // Update the last operator
}

// Function to calculate the final result
function calculate() {
  const display = document.getElementById("display");

  if (currentValue && lastOperator) {
    const result = calculateIntermediate(
      parseFloat(currentValue),
      parseFloat(display.value),
      lastOperator
    );
    display.value = result; // Show final result
    currentValue = ""; // Reset current value
    lastOperator = ""; // Reset operator
  }
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = ""; // Clear the display
  currentValue = ""; // Reset current value
  lastOperator = ""; // Reset operator
}

// Helper function to calculate intermediate results
function calculateIntermediate(value1, value2, operator) {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value2 !== 0 ? value1 / value2 : "Error"; // Handle division by zero
    default:
      return value2; // If no operator, return the second value
  }
}
