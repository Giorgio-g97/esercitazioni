import {
  cart,
  removeFromCart,
  calcCartQuantity,
  updateQuantity,
  updateDeliveryOption,
} from "../../data/cart.js"; // importa il carrello per generare html dei prodotti all'interno dell'array cart
import { products, getProduct } from "../../data/products.js"; // importa i prodotti per prelevare tutti i dati (nome, prezzo, img)
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; // export default (without {}), is the ESM version of the library
import { deliveryOptions, getDeliveryOption, caluclateDeliveryDate } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";

//15g
import isSatSun from "../../exercises 15/exercises-15.js";

const day = dayjs()
const afterWeek = day.add(1, 'w')
isSatSun(afterWeek)
//

export function rendereOrderSummary() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    // scorri gli elementi presenti nel carrello

    const productId = cartItem.productId; // facciamo corrispondere l'id del prodotto con quello presente nell'altro file cart.js importato prima

    const matchingProduct = getProduct(productId);

    //console.log(matchingProduct);//facendo una prova, ci stampa l'oggetto del prodotto presente all'interno dell'altro array products, possiamo quindi usarlo per generare in maniera dinamica le proprietà di quel prodortto (img, name, price ecc...)

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);//Mi ritorna un oggetto

    const dateString = caluclateDeliveryDate(deliveryOption)//Mi ritorna una stringa

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container js-cart-item-container-${
        matchingProduct.id
      }">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>
  
      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">
  
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity
          js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity: <span class="quantity-label js-quantity-label">${
                cartItem.quantity
              }</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity" data-product-id="${
              matchingProduct.id
            }">
              Update
            </span>
            <input class="quantity-input js-quantity-input">
            <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id="${
              matchingProduct.id
            }">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link
            js-delete-link-${matchingProduct.id}"
            data-product-id="${
              matchingProduct.id
            }">
              Delete
            </span>
          </div>
        </div>
  
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
      `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = caluclateDeliveryDate(deliveryOption)

      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} -`; // ternary operator

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId; //controlla se l'id del prodotto presente nel carrello è uguale all'ID preimpostato nel deliveryOptions, successivamente nel tern. op. in basso imposto che se è verificata la condiz. imposta su "checked", altrimenti vuoto

      //Colleghiamo dataAttrib per assegn. id al div dove gestiamo l'addEventListener "js-del-opt"
      html += `
        <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" ${isChecked ? "checked" : ""}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString} Shipping
            </div>
          </div>
        </div>
      `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML; //render products in HTML

  // console.log(cartSummaryHTML)

  // DELETE Button
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      // console.log('delete');
      const productId = link.dataset.productId; //prendiamo il del button di quell'id specifico sfruttando il dataset attribute
      console.log(productId);
      removeFromCart(productId); //rimuovi dall'array cart
      
      /*
      ANZICHE' RIMUOVERLO DALLA PAGINA
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      ); //prendo l'elemento dal DOM
      container.remove(); //uso il metodo .remove() per rimuoverlo dalla pagina
      */
      renderCheckoutHeader();//15k

      renderPaymentSummary();

      rendereOrderSummary();// rigenero HTML
    });
  });

  // Gestione delivery options

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      // Otteniamo valori tramite dataAttrb (shortCode)
      const { productId, deliveryOptionId } = element.dataset; // usiamo i dataset attribute dei deliveryOpt per estrapolare gli id products & delivery
      updateDeliveryOption(productId, deliveryOptionId);
      rendereOrderSummary();
      renderPaymentSummary();
    });
  });

  // Update Cart Header - ESPORTATO IN NUOVA FUNCTION
  // function updateCartQuantity() {
  //   const cartQuantity = calcCartQuantity();

  //   document.querySelector(
  //     `.js-checkout-header`
  //   ).textContent = `Checkout (${cartQuantity} items)`;
  //   // console.log(cartItem.quantity)
  // }

  // UPDATE product Button
  document.querySelectorAll(".js-update-quantity").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      // console.log(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add("is-editing-quantity");
    });
  });

  // SAVE AFTER UPDATE product Button
  document.querySelectorAll(".js-save-quantity-link").forEach((link) => {
    // Save on click
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.remove("is-editing-quantity");
      const inputValue = document.querySelector(".js-quantity-input");
      const val = Number(inputValue.value);
      if (val > 1000 || val < 0) {
        console.log("quantity must be between 0 and 1000");
        return;
      }
      updateQuantity(productId, val);
      document.querySelector(".js-quantity-label").textContent = `${val}`;

      renderCheckoutHeader();
      renderPaymentSummary();
    });

    // Gestione KEYDOWN 'Enter'
    const inputValue = document.querySelector(".js-quantity-input");

    inputValue.addEventListener("keydown", (e) => {
      // console.log(e.key)
      if (e.key === "Enter") {
        const productId = link.dataset.productId;
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.remove("is-editing-quantity");
        const val = Number(inputValue.value);
        if (val > 1000 || val < 0) {
          console.log("quantity must be between 0 and 1000");
          return;
        }
        updateQuantity(productId, val);
        document.querySelector(".js-quantity-label").textContent = `${val}`;

        renderCheckoutHeader();
        renderPaymentSummary();
      }
    });
  });

  renderCheckoutHeader();
}//E' il modo migliore per aggiornare i dati: 1) Aggiorno i dati 2) rigenero l'HTML includendo il tutto in una funzione e rievocandola quando serve per aggiornare. Questa tecnica si chiama MVC = Model View Controller
