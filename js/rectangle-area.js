function calculateRectangleArea() {
  // get length,width of the triangle
  const lengthInput = document.getElementById("rectangle-length");
  const widthInput = document.getElementById("rectangle-width");

  // get length,width value of the triangle
  const lengthText = lengthInput.value;
  const widthText = widthInput.value;

  // set to the convert parsFloat value
  const length = parseFloat(lengthText);
  const width = parseFloat(widthText);

  // calculate rectangle area
  const area = length * width;

  // display to the rectangle value
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
