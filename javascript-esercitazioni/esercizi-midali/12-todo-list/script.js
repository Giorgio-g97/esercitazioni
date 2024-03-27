class todoList {//Creo una classe (OOP moderno)
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];//Imposto che i tasks di default sono un array vuoto, altrimenti prendi i tasks salvati nel localStorage
    this.aggiornaTasks()//Aggiorna sempre i tasks
  }
  addTask(task) {//FUnzione aggiungi task
    this.tasks.push(task); //Pusha task nell'array
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); //Salva nel localStorage
    this.generaTask(task); //Esegui funzione di generazione task HTML
    task = '';
    console.log(task);
  }

  completeTask(task) {//Funzione Task completato
    const i = this.tasks.indexOf(task);//Prendi l'indice del task selezionato
    this.tasks.splice(i, 1);//Elimina l'indice selezionato dall'array
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); //Aggiorno lo stato del localStorage
  }

  generaTask(task) {//Funzione generazione Task in HTML
    const divList = document.querySelector(".todo-list"); //Prendi il div
    const p = document.createElement("p"); //Crea parag
    p.textContent = task; //Metti contenuto del task che gli passi come param (input.value)
    divList.appendChild(p); //Appendi al div 
    p.addEventListener("click", (e) => {//Metti in ascolto in parag, al click
      this.completeTask(task); //esegui funzione di task completata
      e.target.remove(); //Rimuovi il paragr
    });
  }

  aggiornaTasks(){//Aggiorna sempre lista tasks
    this.tasks.forEach(task => {
      this.generaTask(task)
    });
  }
}

const addBtn = document.querySelector(".addList");
const input = document.querySelector(".titolo");

const todoList1 = new todoList();//Crea nuova istanza della classe todoList()

addBtn.addEventListener("click", () => {//Al click del bottone "Aggiungi"
  todoList1.addTask(input.value);//Aggiungi task all'array secondo la funzione spiegata prima
  input.value = "";//Resetta i campi
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    todoList1.addTask(input.value);
    input.value = "";
  }
});

todoList1.generaTask();