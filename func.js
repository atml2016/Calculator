function appendtodisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay(value) {
  const display = document.getElementById("display");
  display.value = "";
}

function operators(value) {
  const display = document.getElementById("display");

  const lastChar = display.value.slice(-1);

  if (
    ["+", "-", "*", "/"].includes(lastChar) &&
    ["+", "-", "*", "/"].includes(value)
  ) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function calculate(value) {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
