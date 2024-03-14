const arrayList = JSON.parse(localStorage.getItem('arrayList')) || [];

const updateList = () => {
  let pHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    const taskObj = arrayList[i];
    // const name = taskObj.name;
    // const date = taskObj.date;
    const { name, date } = taskObj; // structuring, estrapola name dall'oggetto e la salva in una variabile con lo stesso nome
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="del-btn" onclick="
        arrayList.splice(${i}, 1);
        updateList();
      "
      >Delete</button>
      `; // creiamo html
      pHTML += html; // salviamo in var.
    }
    document.querySelector(".js-todolist").innerHTML = pHTML; // modifichiamo il div inserendo l'html
};

updateList();

const addList = () => {
  const inputName = document.querySelector(".input-js");
  const inputDate = document.querySelector(".js-date-input");
  const name = inputName.value;
  const date = inputDate.value;
  arrayList.push({ // pusha i valori nell'array
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
  localStorage.setItem('arrayList', JSON.stringify(arrayList))
}
