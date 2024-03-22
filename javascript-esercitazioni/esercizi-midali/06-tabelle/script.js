const data = [
  {
    id: 1,
    nome: "Giorgio",
    cognome: "G",
    email: "giorgio@gmail.com",
    codice_fiscale: "gdggrg98fds98320fsd",
    indirizzo: "Via pertini 9",
  },
  {
    id: 2,
    nome: "Mario",
    cognome: "D",
    email: "mariod@gmail.com",
    codice_fiscale: "dprmra98fds98320fsd",
    indirizzo: "Via Borsell 9",
  },
  {
    id: 3,
    nome: "Diana",
    cognome: "P",
    email: "dianap@gmail.com",
    codice_fiscale: "pstdna98fds98320fsd",
    indirizzo: "Via Orta 9",
  },
  {
    id: 4,
    nome: "Pasquale",
    cognome: "C",
    email: "pasqualec@gmail.com",
    codice_fiscale: "cvlpql98fds98320fsd",
    indirizzo: "Via Agata 9",
  },
];

const tab = document.getElementById("tabella");

data.forEach((el) => {//Itero array
    console.log(el)//Mi da oggetti
  const r = document.createElement("tr");
  //Per iterare un oggetto non possiamo usare .forEach() perché è relativo all'array, ma usiamo 'Object.keys' per "trasformarlo" in un array
  
  Object.keys(el) //itero l'oggetto
    .forEach((key) => {
      // console.log(key);//Stampo la chiave di ogni oggetto
      console.log(el[key]); // mostra i valori di ciascuna chiave all'interno dell'oggetto
      const col = document.createElement("td"); //Creo la colonna
      col.textContent = el[key]; //Inserisco il contenuto di ogni valore
      r.appendChild(col); //Nella riga "appendo" ogni singola colonna
    });

  tab.appendChild(r); //"appendo" poi la riga completa di colonne alla tabella
});
