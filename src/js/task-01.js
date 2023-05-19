const categoriesListEl = document.querySelector("#categories");
const listItemEls = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesListEl.children.length}`);

listItemEls.forEach((listItem) => {
  console.log(`Category: ${listItem.firstElementChild.textContent}`);
  console.log(`Elements: ${listItem.lastElementChild.children.length}`);
});
