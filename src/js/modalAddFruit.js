import { addFruit } from "./fetchFruitsAPI";
const addFruitBtnRef = document.querySelector(".add-fruit__btn");
const addFruitFormRef = document.querySelector(".add-fruit__form");

addFruitBtnRef.addEventListener("click", (evt) => {});

addFruitFormRef.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newFruit = {
    name: evt.currentTarget.elements.name.value,
    price: evt.currentTarget.elements.price.value,
    emoji: evt.currentTarget.elements.emoji.value,
    quantity: evt.currentTarget.elements.quantity.value,
  };
  addFruit(newFruit);
  evt.currentTarget.reset();
  return newFruit;
});
