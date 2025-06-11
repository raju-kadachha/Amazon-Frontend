// we imported "cart" and "products" variable from given filePath 
import { cart, addToCart } from "../data/cart.js"; //.js  import { cart as myCart}
import { products } from "../data/products.js"
import { formatCurrency } from "./utils/money.js";
import cartQuantityFn from "./utils/cartQuantity.js";

document.querySelector(".js-search-bar").addEventListener("input", () => {
  searchLogic();
});
document.querySelector(".js-search-button").addEventListener("click", () => {
  searchLogic();
});
function searchLogic() {
  document.querySelector(".js-products-grid").innerHTML = ``;
  const searchBar = document.querySelector(".js-search-bar").value.toLowerCase()
    .split(" ")
    .filter(word => word.trim() !== "");
  products.forEach((product) => {
    let productWords = product.name.toLowerCase().split(" ");

    for (let i = 0; i < productWords.length; i++) {
      for (let j = 0; j < searchBar.length; j++) {
        if (productWords[i] == searchBar[j]) {
          console.log(3)
          document.querySelector(".js-products-grid").innerHTML += generateHTML(product); //+=
          addToCartEvent();
          return;
        }
      }
    }
  })
}

products.forEach((product) => {
  document.querySelector(".js-products-grid").innerHTML += generateHTML(product); //+=
});

document.querySelector(".js-card-quantity").innerHTML = cartQuantityFn() === 0 ? '' : cartQuantityFn();

function generateHTML(product) {
  return `
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${formatCurrency(product.priceCents)}
        </div>

        <div class="product-quantity-container">
          <select class="quntity-select-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
  `;
}

addToCartEvent();
function addToCartEvent() {
  document.querySelectorAll(".js-add-to-cart")
    .forEach((button) => {
      button.addEventListener("click", () => {

        const productId = button.dataset.productId;
        addToCart(productId);
        document.querySelector(".js-card-quantity").innerHTML = cartQuantityFn();
      });
    });
}
