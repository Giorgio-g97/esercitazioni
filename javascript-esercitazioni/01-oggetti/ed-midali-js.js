// Oggetti

// function Persona(nome, cognome, eta, genere, interessi){
//     this.nome= nome,
//     this.cognome= cognome,
//     this.eta= eta,
//     this.genere= genere,
//     this.interessi= interessi
//     this.bio = function(){
//         console.log(`Ciao, sono ${this.nome} ${this.cognome}, ho ${this.eta} anni, sono ${(this.genere == 'Maschio' ? 'Maschio' : 'Femmina')} e i miei interessi sono: ${this.interessi.join(', ')}`);
//     };
//     this.saluta = function(){
//         console.log(`Ciao, sono ${this.nome}`);
//     };
// }

// const persona1 = new Persona('Luca', 'Rossi', 23, 'Maschio', ['calcio', 'basket']);
// const persona2 = new Persona('Anna', 'Verdi', 19, 'Femmina', ['pallavolo', 'masterchef']);
// // new Persona = nuova istanza persona 

// persona1.bio();
// persona2.bio();

//Classi ed ereditarietà

// function Insegnante(nome, cognome, eta, genere, interessi, materia){
//     Persona.call(this, nome, cognome, eta, genere, interessi);//Andiamo ad ereditare i parametri di Persona

//     this.materia = materia;
//     this.saluta = function(){
//         console.log(`Buongiorno, sono ${this.nome} ${this.cognome}`);
//     }
// }

// const insegnante = new Insegnante('Anna', 'Blu', 32, 'Femmina', ['Netflix'], 'Storia');
// console.log(insegnante);
// insegnante.saluta();

//ES2015 (Introduzione Classi)

class Persona{
// costruttore
    constructor(nome, cognome, eta, genere, interessi){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.genere = genere;
        this.interessi = interessi;
    }

    saluta(){
        console.log(`Ciao, sono ${this.nome}`);
    }
}

//Insegnante "eredita" da Persona
class Insegnante extends Persona {
    constructor(nome, cognome, eta, genere, interessi, materia){
        super(nome, cognome, eta, genere, interessi);

        this.materia = materia;
    }
    get materia(){
        return this._materia;
    }

    set materia(nuovaMateria){
        this._materia = nuovaMateria;
    }

    riprendiAlunno(nomeAlunno){
        console.log(`${nomeAlunno}! Non si mangia in classe!`);
    }
}

//Creo istanza "insegnante" prendendo dalla classe "Insegnante"
const insegnante = new Insegnante('Clara', 'Gialli', 32, 'Femmina', ['Netflix'], 'Storia')

console.log(insegnante);

insegnante.riprendiAlunno('Edoardo')

console.log(insegnante.materia)

insegnante.materia = 'Geografia'

console.log(insegnante.materia)
