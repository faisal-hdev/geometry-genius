function calculateRectangleArea() {
  //  Access to the input field by getElementById
  const lengthInput = document.getElementById("rectangle-length");
  const widthInput = document.getElementById("rectangle-width");

  // get get value form input field
  const lengthText = lengthInput.value;
  const widthText = widthInput.value;

  // Convert the value to a number. use parsFloat
  const length = parseFloat(lengthText);
  const width = parseFloat(widthText);

  // calculate rectangle area
  const area = length * width;

  // display to the rectangle value
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
