import { users } from "./users.js";

class Tabella {//Creo la classe Tabella in modo da avere un format pre-impostato quando creo le tabelle

  //Proprietà
  nomiColonne;
  data;

  //Constructor
  constructor(nomiColonne, data) {
    //this.nomiColonne (inteso nel contesto della classe) lo assegno alla proprietà nomiColonne (che sarà uguale al parametro che imposteremo dopo, cioè "nomiColonne1")
    this.nomiColonne = nomiColonne;
    //Stessa cosa per le righe di dati
    this.data = data;
    //Facciamo partire funzione generaTabella() a schermo
    this.generaTabella();
  }

//Funzioni
  generaTabella() {
    const tab = document.createElement("table");
    tab.appendChild(this.generaColonne());// Mi ritorna il thead
    tab.appendChild(this.generaRighe());// Mi ritorna il tbody
    document.body.appendChild(tab);
  }

  generaColonne() {
    const thead = document.createElement("thead"); //Generiamo il thead
    this.nomiColonne.forEach((head) => {//.forEach() perché array
      //Per ogni nomecolonna generato dall'array
      const th = document.createElement("th"); //crea un th
      th.textContent = head; //Con contenuto all'interno dell'array
      thead.appendChild(th); //Appendiamolo al thead
    });
    // console.log(thead);
    return thead;
  }
  generaRighe() {
    const tbody = document.createElement("tbody");
    this.data.forEach((r) => {//Ogni singolo oggetto dell'array è una riga
      //   console.log(r);// "r" è il singolo oggetto
      const tr = document.createElement("tr");
      Object.keys(r)//Mi ritorna un array con le proprietà
        .forEach((key) => {//Ora posso iterare con .forEach()
        // console.log(r[key]);
        const cell = document.createElement("td");
        cell.textContent = r[key];//Prendo alla proprietà 'r' (es. prop. 1 è id) il suo valore all'interno della chiave
        tr.appendChild(cell);// Appendo ogni singola cella alla riga
      });
      tbody.appendChild(tr);// Poi la riga al body
    });
    return tbody;
  }
}

const nomiColonne1 = ["id", "nome", "cognome", "email"];
const dati1 = [
  {
    id: 1,
    nome: "Giorgio",
    cognome: "G",
    email: "giorgio@gmail.com",
  },
];

const tab1 = new Tabella(nomiColonne1, dati1); //Creo istanza basato su classe Tabella, passando come parametri le due proprietà della class Tabella: cioè colonne e righe di dati
