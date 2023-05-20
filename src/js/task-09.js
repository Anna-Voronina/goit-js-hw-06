const changeColorBtnEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeColorBtnClick = (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = document.body.style.backgroundColor;
};

changeColorBtnEl.addEventListener("click", onChangeColorBtnClick);
