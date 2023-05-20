const validationInputEl = document.querySelector("#validation-input");

const onValidationInputElBlur = (event) => {
  if (
    validationInputEl.value.length === Number(validationInputEl.dataset.length)
  ) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.add("invalid");
  }
};

validationInputEl.addEventListener("blur", onValidationInputElBlur);
