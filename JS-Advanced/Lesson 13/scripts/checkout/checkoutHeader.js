import { calcCartQuantity } from "../../data/cart"

export function renderCheckoutHeader() {
    let checkoutHeaderHTML = `
    Checkout (<a class="return-to-home-link"
            href="amazon.html"></a>)
    <div class="checkout-header-middle-section js-checkout-header">Checkout (${calcCartQuantity()} items)</div>
    `//Genero HTML

    document.querySelector('.js-checkout-header')
        .innerHTML = checkoutHeaderHTML
}