class Deck{
    
    constructor(){
        this.cards = [1,2,3,4,5,6,7,8,9,'fante', 'donna', 're'];//Settiamo le carte (in questo caso sono carte francesi)
        console.log('Genero nuovo mazzo: ', this.cards);
    }

    mescolaCarte(){
        this.cards.sort((a,b) => {//Vengono paragonati i primi due elementi dell'array del tipo prima "b" e poi "a" (es. 8,5 - 2,8 - 7,2 ecc...)
//RICORDATI che vengono trasformati in STRINGA
// console.log(a);
// console.log(b);
//Abbiamo 3 casi:
// 1) res < 0 - a viene messo prima di b
// 2) res = 0 - non cambia nulla
// 3) res > 0 - b viene messo prima di a
        // const res = a - b
// Seguendo la logica di prima, verrà ordinato in ordine crescente (fai calcolo e verifica)
//Per generare ordine random utilizziamo questa formula:
        const res = 0.5 - Math.random();
            return res;
        })
        console.log('Mazzo mischiato: ', this.cards);
    }

    pescaCarta(){
        const card = this.cards.pop()//Prelevo dall'array di carte l'ultima e la salvo per mostrarla dopo
        console.log('Carta pescata: ', card)//Stampo carta pescata
        console.log('Carte dopo la pescata: ', this.cards);//Aggiorno la lista delle carte
        this.mettiSotto(card)
    }
    
    mettiSotto(card){
        this.cards.unshift(card);
        console.log('Carte dopo aver messo sotto: ', this.cards)
    }

}

const cards1 = new Deck()

cards1.mescolaCarte()
cards1.pescaCarta()