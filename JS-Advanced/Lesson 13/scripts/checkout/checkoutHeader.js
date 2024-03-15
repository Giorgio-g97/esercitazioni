import { calcCartQuantity } from "../../data/cart.js"

export function renderCheckoutHeader() {
    let checkoutHeaderHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
        </a>
      </div>
      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link"
          href="amazon.html">${calcCartQuantity()} items</a>)
      </div>
      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    </div>`//Genero HTML

    let checkHead = document.querySelector('.js-checkout-header')
    checkHead = checkoutHeaderHTML;
        // console.log('checkoutHeader')
    }