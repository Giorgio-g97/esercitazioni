let productsHTML = "";

products.forEach((product) => {
  // Accumulate method
  productsHTML += `
        <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-add-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
        Add to Cart
        </button>
    </div>
    `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

const timerId = {};// Ogni oggetto avrà il proprio timerId

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {

    const {productId} = button.dataset;
    let matchingItem; // var per salvare item già presente
    cart.forEach((item) => {
      // itera gli items del carrello
      if (productId === item.productId) {
        // se il nome del prodotto che si vuole aggiungere è uguale al nome del prodotto presente già nel carrello
        matchingItem = item; //Inserisci nella var
      }
    });

    const sel = document.querySelector(`.js-quantity-selector-${productId}`)
    let selVal = Number(sel.value)


    const addToCartText = document.querySelector(`.js-add-cart-${productId}`)
    addToCartText.style.opacity = '1';// set opacity to 100%

    const prevTimerId = timerId[productId]// La prima volta è undefined
    console.log(prevTimerId);

    if(prevTimerId){// se esiste
        clearTimeout(prevTimerId)//cancella il timer se clicco su aggiungi
    }

    const currTimerId = setTimeout(() => {//Altrimenti rimuovi il msg dopo 2 secondi
        removeOp();
    }, 2000);

    timerId[productId] = currTimerId//imposta il timer corrente come il timerId per poi inserirlo come timer precedente al prossimo ciclo

    function removeOp(){
        addToCartText.style.opacity = '0'
    }
    
    if (matchingItem) {
      //se il match esiste
      matchingItem.quantity += selVal; // incrementa solo la quantità
    } else {
      cart.push({
        //altrimenti pusha nuovo item diverso
        productId,
        quantity: selVal,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});