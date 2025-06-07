export { cart, addToCart, removeFromCart }; //multiple variable,Functions
//both are valid
// export const cart = [];
let cart = JSON.parse(localStorage.getItem('cart'));

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}
//for adding items inside cart addToCart button
// export function ...
function addToCart(productId) {

    let matchingItem;
    // we looping through an array to check if matching item already exist or not
    cart.forEach((cartItem) => {
        if (cartItem.productId == productId) {
            matchingItem = cartItem;
            //save matching cartItem if it exist
        }
    })
    if (matchingItem) {
        matchingItem.Quantity += 1;

        // increase quentity by 1 of existing item
    } else {
        //if matching item doesnt exist push new product into cart arr
        cart.push({
            productId,
            Quantity: 1
        });
    }
    saveToStorage();
}


function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}
console.log(cart);