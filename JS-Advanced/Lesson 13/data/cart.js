export let cart = 
  JSON.parse(localStorage.getItem('cart')) || [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",// Salviamo solo l'id perché possiamo estrapolare i dati all'interno dell'array 'products': normalizing data
    quantity: 2
},
{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}]

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))// salviamo il carrello in localStorage. RICODA di convertire prima in stringa
}

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
    saveToStorage();
  }

  export function removeFromCart(productId) {
    const newCart = []//creiamo nuovo array di prodotti del carrello da aggiornare

    cart.forEach(cartItem => {//itera l'array carrello
      if(cartItem.productId !== productId){//se il productId non è uguale al productId scelto da eliminare
        newCart.push(cartItem);//aggiungi al nuovo carrello
      }// in questo modo riaggiunge tutti i prodotti TRANNE quello con l'id giustamente da eliminare
    });

    cart = newCart;//riassegno tutti i prodotti all'array "cart"
    console.log(cart);
    saveToStorage();
  }