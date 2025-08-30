// get input field value by id

function getInputFieldValueById(id) {
  const elemVal = document.getElementById(id).value;
  const elemValConverted = parseFloat(elemVal);

  return elemValConverted;
}