import { rendereOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

renderCheckoutHeader();
rendereOrderSummary();
renderPaymentSummary();