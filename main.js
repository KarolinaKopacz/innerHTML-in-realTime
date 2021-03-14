const inputField = document.querySelector("#inputfield");
const areaForResult = document.querySelector(".areaforresult");
const checkbox = document.querySelector("#checkbox");
const clearFieldBtn = document.querySelector(".clearfield");

function clearField() {
  inputField.value = "";
  areaForResult.innerHTML = "";
}
clearFieldBtn.addEventListener("click", clearField);

function splitstring(event) {
  const input = event.target.value;

  const fieldsAfterMatch = deleteEmptySpaces(input);
  const fields = splitTheElement(fieldsAfterMatch);
  const filteredFields = getFiltered(fields);
  changeSort(filteredFields);
}
inputField.addEventListener("keyup", splitstring);

function splitstringOnCheckbox() {
  const input = inputField.value;
  const fieldsAfterMatch = deleteEmptySpaces(input);
  const fields = splitTheElement(fieldsAfterMatch);
  const filteredFields = getFiltered(fields);
  changeSort(filteredFields);
}
checkbox.addEventListener("click", splitstringOnCheckbox);

function deleteEmptySpaces(input) {
  const regex = /[A-Za-z]/gi;
  return input.replace(regex, "");
}

function splitTheElement(fieldsAfterMatch) {
  return fieldsAfterMatch.split(",").map(function (stringValue) {
    const newValue = parseFloat(stringValue);
    console.log("newValue", newValue);
    if (newValue === 0) {
      return "0";
    }
    if (isNaN(newValue)) {
      return "";
    }
    return newValue;
  });
}

function getFiltered(fields) {
  return fields
    .filter(function (element) {
      if (Boolean(element)) {
        return true;
      }
      return false;
    })
    .map(function (element) {
      return Number(element);
    });
}

function changeSort(filteredFields) {
  if (checkbox.checked) {
    filteredFields.sort(function (a, b) {
      return b - a;
    });
    areaForResult.innerHTML = filteredFields;
  } else {
    filteredFields.sort(function (a, b) {
      return a - b;
    });
    areaForResult.innerHTML = filteredFields;
  }
}
