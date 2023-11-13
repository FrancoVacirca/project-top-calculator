document.addEventListener("DOMContentLoaded", function () {
  // Variables to store references and data
  const buttons = Array.from(document.querySelectorAll(".button"));
  let display = document.getElementById("display");
  let displayValue = "";

  // Add click event listeners to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button.innerText));
  });

  // Function to handle button clicks
  function handleButtonClick(value) {
    switch (value) {
      case "=":
        calculateResult();
        break;
      case "C":
        clearDisplay();
        break;
      default:
        appendToDisplay(value);
        break;
    }
  }

  // Function to add value to the display
  function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
  }

  // Function to clear the display
  function clearDisplay() {
    displayValue = "";
    updateDisplay();
  }

  // Function to calculate and display the result
  function calculateResult() {
    try {
      let result = evaluateExpression(displayValue);
      display.innerHTML = result;
      displayValue = result.toString();
    } catch (error) {
      handleCalculationError();
    }
  }

  // Function to evaluate the expression
  function evaluateExpression(expression) {
    const numbers = [];
    const operators = [];

    // Split expression into numbers and operators
    expression.split(/([+\-*/])/).forEach((token) => {
      token = token.trim();
      if (!token) return;

      if (token.match(/[+\-*/]/)) {
        operators.push(token);
      } else {
        numbers.push(parseFloat(token));
      }
    });

    // Perform calculations
    while (operators.length > 0) {
      const operator = operators.shift();
      const nextNumber = numbers.shift();

      switch (operator) {
        case '+':
          numbers[0] += nextNumber;
          break;
        case '-':
          numbers[0] -= nextNumber;
          break;
        case '*':
          numbers[0] *= nextNumber;
          break;
        case '/':
          if (nextNumber === 0) {
            throw new Error("Error: Division by zero");
          }
          numbers[0] /= nextNumber;
          break;
      }
    }

    return numbers[0];
  }

  // Function to handle calculation errors
  function handleCalculationError() {
    display.innerHTML = "Error";
    displayValue = "";
  }

  // Function to update the display with the current value
  function updateDisplay() {
    display.innerHTML = displayValue;
  }
});