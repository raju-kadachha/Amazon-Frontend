class Cart {
    cartItems = undefined;

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage() {
        if (this.cartItems) {
            this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        }
        else {
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                Quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                Quantity: 1,
                deliveryOptionId: '2'
            }]
            this.saveToStorage();
        }
    };

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    };

    addToCart(productId) {

        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId == productId) {
                matchingItem = cartItem;
            }
        });
        if (matchingItem) {
            matchingItem.Quantity += 1;
        } else {
            this.cartItems.push({
                productId,
                Quantity: 1,
                deliveryOptionId: '1'
            });
        }
        this.saveToStorage();
    };

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
    };

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId == productId) {
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');



cart.addToCart("77a845b1-16ed-4eac-bdf9-5b591882113d") //Added
// // cart.removeFromCart("77a845b1-16ed-4eac-bdf9-5b591882113d") //Removed
console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);