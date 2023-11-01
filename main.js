const buttons = Array.from(document.querySelectorAll(".button"));
let display = document.getElementById("display");

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText) {
      default:
        display.innerHTML += e.target.innerText;
        break;
      case 'C':
        display.innerHTML = '';
    }
  })
})

const add = () => a + b;

const subtract = () => a - b;

const multiply = () => a * b;

const divide = () => a / b;

const a = 10;
const b = 5;

//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate() {
  //const operator = prompt("choose between: add, subtract, multiply and divide");

  switch (operator) {
    case "add":
      operator == "add";
      console.log(add(a, b));
      break;
    case "subtract":
      operator == "subtract";
      console.log(subtract(a, b));
      break;
    case "multiply":
      operator == "multiply";
      console.log(multiply(a, b));
      break;
    case "divide":
      operator == "divide";
      console.log(divide(a, b));
      break;
  }
}
