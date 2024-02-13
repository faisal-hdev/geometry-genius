function calculatePentagonArea() {
  console.log("pentagon clicked");

  const pentagon = getInValueById("pentagon-perimeter");
  const apothem = getInValueById("pentagon-apothem");
  const area = 0.5 * pentagon * apothem;
  setInnerTextById("pentagon-area", area);
}

function getInValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
