export { cart, addToCart }; //multiple variable,Functions
//both are valid
// export const cart = [];
let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    Quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    Quantity: 1
}
];


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
}
