const nomi = ["Giacomo", "Nunzio", "Giorgio", "Mario"];

const searchInput = document.querySelector(".inputSearch");
const ris = document.querySelector(".res-search");
const ul = document.createElement("ul");
ris.appendChild(ul);

searchInput.addEventListener("keypress", (e) => {
  ris.classList.add("border-2", "p-2");
  searchValue = e.key;
  console.log(searchValue);

  nomi.forEach((el) => {//Per ogni elemento all'interno dell'array di nomi
    let elSplitted = el.split(""); //Splitta ogni lettera
    let wordMatch = "";
    for (letter of elSplitted) {
      //Per ogni lettera della singola parola
      if (e.key == letter) {
        wordMatch += letter;
        console.log(wordMatch);
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = el;
      }
    }
  });
});
