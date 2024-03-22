import { users } from "./users.js";

class Tabella {
  //Proprietà
  nomiColonne;
  data;

  //Constructor
  constructor(nomiColonne, data) {
    //this.nomiColonne (inteso nel contesto della classe) lo assegno alla proprietà nomiColonne (che sarà uguale al parametro che imposteremo, cioè "nomiColonne1")
    this.nomiColonne = nomiColonne;
    //Stessa cosa per le righe di dati
    this.data = data;
    // console.log(this);
    //Facciamo partire funzione generaTabella() a schermo
    this.generaTabella();
  }

  generaTabella() {
    const tab = document.createElement("table");
    tab.appendChild(this.generaColonne());
    tab.appendChild(this.generaRighe());
    document.body.appendChild(tab);
  }

  generaColonne() {
    const thead = document.createElement("thead");//Generiamo il thead
    this.nomiColonne.forEach(head => {//Per ogni nomecolonna generato dall'array
        const th = document.createElement('th');//crea un th
        th.textContent = head//Con contenuto all'interno dell'array
        thead.appendChild(th)//Appendiamolo al thead
    });    
    // console.log(thead);
    return thead;
  }
  generaRighe() {
    const tbody = document.createElement('tbody');
    this.data.forEach(r => {
        console.log(r);
        const tr = document.createElement('tr');
        Object.keys(r).forEach(key => {
            console.log(r[key]);
        })
    })
    return tbody;
  }
}

const nomiColonne1 = ["id", "nome", "cognome", "email"];
const dati1 = [{
  id: 1,
  nome: "Giorgio",
  cognome: "G",
  email: "giorgio@gmail.com",
}];

const tab1 = new Tabella(nomiColonne1, dati1); //Creo istanza basato su classe Tabella, passando come parametri le due proprietà della class Tabella: cioè colonne e righe di dati