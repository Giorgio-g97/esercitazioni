const arrayList = ["watch youtube", "dinner"];

const updateList = () => {
  let pHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    const task = arrayList[i]; // scorriamo array
    const html = `<p>${task}</p>`; // creiamo html
    pHTML += html; // salviamo in var.
    document.querySelector(".js-todolist").innerHTML = pHTML;// modifichiamo il div inserendo l'html
  }
};

updateList();

const addList = () => {
  const inputName = document.querySelector(".input-js");
  // console.log(inputName);
  arrayList.push(inputName.value);
  console.log(arrayList);
  inputName.value = "";
  updateList();
};
