const nomi = ["Giacomo", "Nunzio", "Giorgio", "Mario"];

const searchInput = document.querySelector(".inputSearch");
const risultato = document.querySelector(".res-search");

searchInput.addEventListener("keypress", autocomplete);

function inputMatch(value){
  if(value == "") return []
//Breve cenno RegExp: è un motore di ricerca che trova determinate stringhe in base a quello che gli passi.
//C'è un secondo parametro che è il flag, serve per
//Settare determinati filtri nella ricerca
//Vedi docs di RegExp
  const reg = new RegExp(value, "gi")//Espressioni regolari
//imposto l'espressione secondo quanto mi passa il parametro del valore che ricevo dall'input della ricerca
  return nomi.filter(nome => {//Filtrando l'array di nomi
    if(nome.match(reg)) return nome;//Se il singolo nome matcha con quanto passato dall'input, ritorna il nome in un uovo array
  })
  }

function autocomplete(e){
    risultato.classList.add("border-2", "p-2");
    const searchValue = e.target.value;//Prendo il valore dall'input (NON la chiave, la chiave è quello che scrivi)
    let sugg = ''
    const nomi = inputMatch(searchValue)
    nomi.forEach((nome) => {//Per ogni nome all'interno dell'array di nomi
      sugg += `<li class="hover:bg-gray-200" onClick="seleziona(event)">${nome}</li>`//Genera un elenco di nomi
    });
    risultato.innerHTML = `<ul>${sugg}</ul>`//appendo alla fine al div un <ul> con dentro i vari <li> (metodo innerHTML)
}

function seleziona(event){//Quando seleziono il suggerimento
  risultato.innerHTML = ''//Resetto il risultato
  const resValue = event.target.textContent;//Prendo il valore del suggerimento
  searchInput.value = resValue;//E lo metto al posto del valore dell'input
  risultato.classList.remove("border-2", "p-2")//Rimuovo la classe
}