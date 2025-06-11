export { cart, addToCart, removeFromCart, saveToStorage }; //multiple variable,Functions
//both are valid
// export const cart = [];
let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        Quantity: 2,
        deliveryOptionId: '1'
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        Quantity: 1,
        deliveryOptionId: '2'
    }
    ]
}
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
    });
    const selectedQuantity = Number(document.querySelector(`.quntity-select-${productId}`).value)
    console.log(typeof selectedQuantity)
    if (matchingItem) {
        matchingItem.Quantity += selectedQuantity;   // increase quentity by 1 of existing item
    } else {
        //if matching item doesnt exist push new product into cart arr
        cart.push({
            productId,
            Quantity: selectedQuantity, //quantity selector
            deliveryOptionId: '1'
        });
    }
    saveToStorage();
    //show message "Added"
    const message = document.querySelector(`.js-added-to-cart-${productId}`);
    message.style.opacity = '1';
    setTimeout(() => {
        message.style.opacity = '0';
    }, 2000);

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

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.productId == productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}