function calculateTriangleArea() {
  // get triangle bash value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  // get triangle value value
  const triangleHightInput = document.getElementById("triangle-hight");
  const triangleHightText = triangleHightInput.value;
  const hight = parseFloat(triangleHightText);

  // calculate triangle area
  const area = 0.5 * base * hight;
  console.log("Area of the triangle is:", area);

  // display triangle area
  const triangleSpan = document.getElementById("triangle-area");
  triangleSpan.innerText = area;
}
