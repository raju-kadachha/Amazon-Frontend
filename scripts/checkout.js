import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart.js";
import { scrollBtnFn } from "./utils/scrollToTopBtn.js";
renderOrderSummary();
renderPaymentSummary();
scrollBtnFn(); //Scroll to top btn