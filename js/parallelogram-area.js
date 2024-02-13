function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  const hight = getInputValueById("parallelogram-hight");
  const area = base * hight;
  setInnerTextById("parallelogram-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
