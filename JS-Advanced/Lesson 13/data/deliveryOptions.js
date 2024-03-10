import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

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

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');//Formato giorno della settimana
//ritorna true se il valore è 'saturday' o 'sunday'
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
}

export function caluclateDeliveryDate(deliveryOption) {
  // const today = dayjs(); // save var today
  //   const deliveryDate = today.add(
  //     // aggiungi in base  ai giorni stabiliti dall'id delivery
  //     deliveryOption.deliveryDays,
  //     "days"
  //   );

//Sono i giorni di spedizione
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while(remainingDays > 0){// i giorni di spedizione sono positivi?
    
    deliveryDate = deliveryDate.add(1, 'd')//Aggiungi un giorno alla data odierna

    if(!isWeekend(deliveryDate)){//Se la data odierna NON è weekend(sab-dom)
      remainingDays--;//i corrieri spediscono, togli un giorno
    }
  }

  const dateString = deliveryDate.format("dddd, MMMM D")

  return dateString;
}