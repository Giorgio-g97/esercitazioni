const arrayList = JSON.parse(localStorage.getItem("arrayList")) || [];

const todoList = document.querySelector(".js-todolist");

const updateList = () => {
  let pHTML = "";

  arrayList.forEach(function (taskObj, index) {
    const { name, date } = taskObj; // destructuring, estrapola name dall'oggetto e la salva in una variabile con lo stesso nome
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="del-btn">Delete</button>
      `; // creiamo html
    pHTML += html; // salviamo in var.
  });
  todoList.innerHTML = pHTML; // modifichiamo il div inserendo l'html

  document
    .querySelectorAll(".del-btn") // prendi tutti i del-btn generati
    .forEach((delBtn, index) => {
      // scorri con forEach
      delBtn.addEventListener("click", () => {
        // aggiungi un eventListener
        arrayList.splice(index, 1); // esegui il codice
        updateList();
      });
    });
};

updateList();

document.querySelector(".add-btn").addEventListener("click", () => {
  addList();
});

const addList = () => {
  const inputName = document.querySelector(".input-js");
  const inputDate = document.querySelector(".js-date-input");
  const name = inputName.value;
  const date = inputDate.value;
  arrayList.push({
    // pusha i valori nell'array
    // name: inputName.value,
    // date: inputDate.value
    name, // shorthand, valore e prop hanno stesso nome
    date,
  });
  inputName.value = "";
  inputDate.value = "";
  updateList();
  saveLocalStorage();
};

const saveLocalStorage = () => {
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
};
