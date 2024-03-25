const nomi = ["Giacomo", "Nunzio", "Giorgio", "Mario"];

const searchInput = document.querySelector(".inputSearch");
const ris = document.querySelector(".res-search");

searchInput.addEventListener("keypress", (e) => {
  searchValue = e.key;
  console.log(searchValue);

  for (el of nomi) {
    let elSplitted = el.split("");
    let wordMatch = '';
    for (word of elSplitted) {
      if (e.key == word) {
        wordMatch += word;
        console.log(wordMatch);
        const p = document.createElement("p");
        ris.appendChild(p);
        p.textContent = el;
      }
    }
  }
});
