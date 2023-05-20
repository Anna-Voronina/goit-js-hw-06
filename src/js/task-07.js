const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onFontSizeControlInput = (event) => {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
};

fontSizeControlEl.addEventListener("input", onFontSizeControlInput);
