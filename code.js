const display = document.getElementById('display');

// Append number or operator to display
function append(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate square of current value
function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (e) {
    display.value = 'Error';
  }
}

// Evaluate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
