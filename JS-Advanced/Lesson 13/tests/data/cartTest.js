import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe("test suite: addToCart", () => {
  beforeEach(()=> {
    spyOn(localStorage, "setItem");//Simuliamo saveLocalStorage
  });

  it("adds an existing product to the cart", () => {

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage(); //refresh cart

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{//16d
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "1",
    }]));
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);
  });

  it("adds a new product to the cart", () => {

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]); //Fake getItem empty array
    });

    loadFromStorage(); //refresh cart

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6"); //add product
    expect(cart.length).toEqual(1); // Darà errore perchè nel carrello di default sono presenti de prodotti. Per fixare simuliamo array vuoto con chiamate fake (MOCK METHOD)

    //Verifichiamo se è stato chiamato il metodo setItem dal localStorage per salvare il prodotto
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    //Verify if cart productId is the same of the product productId
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    //Verify the quantity
    expect(cart[0].quantity).toEqual(1);
  });

  afterEach(()=> {
    document.querySelector('.js-test-container').innerHTML = ''
  })
});
