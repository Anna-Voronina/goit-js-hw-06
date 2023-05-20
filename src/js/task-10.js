const elementsNumberInputEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let initialBoxSize = 30;

const createBoxes = function (amount) {
  let boxesStr = "";

  for (let i = 0; i < amount; i += 1) {
    const initialBox = `<div style="background-color:${getRandomHexColor()}; width:${initialBoxSize}px; height:${initialBoxSize}px"></div>`;
    initialBoxSize += 10;
    boxesStr += initialBox;
  }

  return boxesStr;
};

const onCreateBtnClick = (event) => {
  boxesEl.insertAdjacentHTML(
    "beforeend",
    createBoxes(Number(elementsNumberInputEl.value))
  );
};

const onDestroyBtnClick = (event) => {
  boxesEl.innerHTML = "";
  elementsNumberInputEl.value = "";
  initialBoxSize = 30;
};

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnClick);
