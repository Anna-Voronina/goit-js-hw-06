const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueEl = document.querySelector("#value");

let counterValue = 0;

const onDecrementBtnClick = (event) => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

const onIncrementBtnClick = (event) => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", onDecrementBtnClick);
incrementBtnEl.addEventListener("click", onIncrementBtnClick);
