import { rendereOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart";

describe("Test suite: renderOrderSumary", () => {
  it("displays the cart", () => {
    document.querySelector(".js-test-container").innerHTML = `
                <div class="js-order-summary"></div>
            `;

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ]);
    });
    loadFromStorage(); //refresh cart

    rendereOrderSummary();//Generiamo HTML tramite funzione
    //1h26m
  });
});
