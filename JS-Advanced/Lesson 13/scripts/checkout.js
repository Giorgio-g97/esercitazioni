import { cart } from "../data/cart.js";// importa il carrello per generare html dei prodotti all'interno dell'array cart
import { products } from "../data/products.js";// importa i prodotti per prelevare tutti i dati (nome, prezzo, img)

let cartSummaryHTML = '';

cart.forEach((cartItem) => {// scorri gli elementi presenti nel carrello

    const productId = cartItem.productId// facciamo corrispondere l'id del prodotto con quello presente nell'altro file cart.js importato prima

    let matchingProduct;//crea variabile per controllare che l'id del prodotto corrisponda a quello del carrello

    products.forEach((product) => {
        if(product.id === productId){//se l'id carrello corrisponde all'id del prodotto
            matchingProduct = product // il prodotto corrisponde al prodotto controllato
        }
    })

    //console.log(matchingProduct);//facendo una prova, ci stampa l'oggetto del prodotto presente all'interno dell'altro array products, possiamo quindi usarlo per generare in maniera dinamica le proprietà di quel prodortto (img, name, price ecc...)

    cartSummaryHTML +=  `
    <div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${matchingProduct.priceCents * 100}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML

// console.log(cartSummaryHTML)