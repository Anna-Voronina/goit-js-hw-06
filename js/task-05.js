const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInput = (event) => {
  if (inputEl.value !== "") {
    outputEl.textContent = inputEl.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onInput);
