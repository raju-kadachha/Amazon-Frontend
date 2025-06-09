import { cart } from "../../data/cart.js";

export default function cartQuantityFn() {
    let cartQuantity = 0
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.Quantity
    });
    return cartQuantity;
}