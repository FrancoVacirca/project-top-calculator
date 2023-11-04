const buttons = Array.from(document.querySelectorAll(".button"));
let display = document.getElementById("display");
let displayValue = [];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      default:
        display.innerHTML += e.target.innerText;
        displayValue.push(e.target.innerText);
        break;
      case "C":
        display.innerHTML = "";
        displayValue = [];
        break;
      case "=":
        operate();
        break;
    }
  });
});

function operate() {
  // Join the displayValue array to form an expression
  const expression = displayValue.join('');

  // Use regular expressions to split the expression into operands and operator
  const regex = /(\d+)([+\-*/])(\d+)/;
  const match = expression.match(regex);

  if (match) {
    const operand1 = parseFloat(match[1]);
    const operator = match[2];
    const operand2 = parseFloat(match[3]);

    let result;

    // Perform the calculation based on the operator
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 !== 0) {
          result = operand1 / operand2;
        } else {
          result = "Error: Division by zero";
        }
        break;
      default:
        result = "Error: Invalid operator";
    }

    // Display the result
    display.innerHTML = result;

    // Clear the displayValue array and add the result as the new starting value
    displayValue = [result.toString()];
  }
}


