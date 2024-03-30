export const createProductsMarkUp = (productsArr, list) => {
  productsArr.forEach((product) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="product__item">
        <h2>${product.name} ${product.emoji}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        </li>`
    );
  });
};
