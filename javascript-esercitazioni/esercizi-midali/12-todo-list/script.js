class todoList {
  //Creo una classe (OOP moderno)
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || []; //Imposto che i tasks di default sono un array vuoto, altrimenti prendi i tasks salvati nel localStorage
    this.aggiornaTasks(); //Aggiorna sempre i tasks
  }
  addTask(task) {
    //Funzione aggiungi task
    this.tasks.push(task); //Pusha task nell'array
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); //Salva nel localStorage
    this.generaTask(task); //Esegui funzione di generazione task HTML
  }

  completeTask(task) {
    //Funzione Task completato
    const i = this.tasks.indexOf(task); //Prendi l'indice del task selezionato
    this.tasks.splice(i, 1); //Elimina l'indice selezionato dall'array
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); //Aggiorno lo stato del localStorage
  }

  generaTask(task) {
    //Funzione generazione Task in HTML
    const divList = document.querySelector(".todo-list"); //Prendi il div
    if (task) {
      const taskDiv = document.createElement("div");//Genero div container del task
      taskDiv.classList.add("grid", "grid-cols-2");//Assegno classi
      const p = document.createElement("span"); //Crea parag
      p.classList.add("mx-3")
      p.textContent = task; //Metti contenuto del task che gli passi come param (input.value)
      taskDiv.appendChild(p); //Appendi al div
      //Genera CompleteBtn
      const completed = document.createElement("btn");//Creo tasto complete
      completed.textContent = "Completato";//Scrivo contenuto
      completed.classList.add(//Assegno classi
        "bg-red-500",
        "hover:bg-red-700",
        "text-white",
        "p-1",
        "my-1",
        "m-3",
        "rounded",
        "text-center"
      );
      taskDiv.appendChild(completed);//Li appendo
      divList.appendChild(taskDiv);
      completed.addEventListener("click", () => {
        //Metti in ascolto in parag, al click
        taskDiv.remove();//Rimuovo il div dall'HTML
        this.completeTask(task); //elimina task dall'array (e localStorage)
      });
    }
  }

  aggiornaTasks() {
    //Aggiorna sempre lista tasks
    this.tasks.forEach((task) => {
      this.generaTask(task);
    });
  }
}

const addBtn = document.querySelector(".addList");
const input = document.querySelector(".titolo");

const todoList1 = new todoList(); //Crea nuova istanza della classe todoList()

addBtn.addEventListener("click", () => {
  //Al click del bottone "Aggiungi"
  todoList1.addTask(input.value); //Aggiungi task all'array secondo la funzione spiegata prima
  input.value = ""; //Resetta i campi
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    todoList1.addTask(input.value);
    input.value = "";
  }
});

todoList1.generaTask();
