export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
},
{
    id: '2',
    deliveryDays: 3,
    priceCents: 499
},
{
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    
    let deliveryOption;

    deliveryOptions.forEach((option) => {
      //se l'id dell'opzione di consegna è uguale all'id della consegna presente nel prodotto all'interno del carrello
      if (option.id === deliveryOptionId) {
        deliveryOption = option; //i prodotti coincideranno
      } // Abbiamo ora accesso alle proprietà per calcolare i giorni nell'header di consegna
    });

    return deliveryOption;
}