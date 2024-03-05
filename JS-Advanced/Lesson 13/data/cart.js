export const cart = []

export function addToCart(productId) {
    let matchingItem; // var per salvare item già presente
    cart.forEach((cartItem) => {
      // itera gli items del carrello
      if (productId === cartItem.productId) {
        // se il nome del prodotto che si vuole aggiungere è uguale al nome del prodotto presente già nel carrello
        matchingItem = cartItem; //Inserisci nella var
      }
    });
    if (matchingItem) {
      //se il match esiste
      matchingItem.quantity += 1; // incrementa solo la quantità
    } else {
      cart.push({
        //altrimenti pusha nuovo item diverso
        productId: productId,
        quantity: 1,
      });
    }
  }