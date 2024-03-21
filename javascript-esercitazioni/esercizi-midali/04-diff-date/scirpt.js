const date2 = document.querySelector(".date2");
const date1 = document.querySelector(".date1");
const res = document.querySelector(".result");
function getDateValue(date) {
  dateValue = date.value; //Prendo il valore
  const dateObjInMS = new Date(dateValue).getTime(); //Ottengo l'oggetto data e lo converto in ms
  // console.log(typeof dateObjInMS); //Per verificare che non ci siano errori, consolloggo il tipo di dato
  return dateObjInMS; //lo ritorno in modo da utilizzarlo per la funzione successiva
}

document.querySelector(".getValue").addEventListener("click", () => {
  let date2Ms = getDateValue(date2); //IMPORTANTE, salvo il risultato della funzione (che è un numero) in una variabile
  let date1Ms = getDateValue(date1);
  if(date2Ms < date1Ms){
    res.textContent = 'Inserisci date corrette per il calcolo'
  }else if (date2Ms && date1Ms) {//Controlla se esistono o sono null
    let dif = date2Ms - date1Ms; //Faccio differenza

    let difference = Math.round(dif / (1000 * 60 * 60 * 24)); //Divido la differenze tra le due date (in ms) per i millisecondi contenuti in 24 ore, poi arrotondo per eccesso con Math.round().
    console.log(difference);
    res.textContent = `La differenza tra le due date è di ${
      difference === 1 ? difference + " giorno" : difference + " giorni"
    }.`; //Controllo se i giorni sono superiori a 1
  }else{
    res.textContent = 'Compila entrambe le date!'
  }
});
