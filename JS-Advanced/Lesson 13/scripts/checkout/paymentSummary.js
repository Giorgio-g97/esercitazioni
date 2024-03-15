import { cart, calcCartQuantity } from "../../data/cart.js";//importiamo il carrello per ottenere i dati dei prodotti (quantità, prezzo ecc..)
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {

    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);//controlla se il prodotto nel carrello matcha
        productPriceCents += product.priceCents * cartItem.quantity;//calcoliamo il costo tot dei products
        
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);//Accediamo alle proprietà della spedizione
        shippingPriceCents += deliveryOption.priceCents;//accediamo alla proprietà del costo spedizione e la aggiungiamo 

    });

    const totalBeforeTaxCents = productPriceCents+shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents+taxCents;

// Ora generiamo HTML

 const paymentSummaryHTML = `
    <div class="payment-summary-title">
    Order Summary
    </div>

    <div class="payment-summary-row">
    <div>Items (${calcCartQuantity()}):</div>
    <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>
 `;//Generiamo HTML

    let paymentSum = document.querySelector('.js-payment-summary')
        paymentSummaryHTML = paymentSum;
}

renderPaymentSummary();