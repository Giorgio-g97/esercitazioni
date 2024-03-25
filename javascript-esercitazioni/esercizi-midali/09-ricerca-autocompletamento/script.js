const nomi = ["Giacomo", "Nunzio", "Giorgio", "Mario"];

const searchInput = document.querySelector(".inputSearch");
const ris = document.querySelector(".res-search");
const ul = document.createElement("ul");
ris.appendChild(ul);

searchInput.addEventListener("keypress", (e) => {
  ris.classList.add("border-2", "p-2");
  searchValue = e.key;
  console.log(searchValue);
  let sugg = ''
  nomi.forEach((nome) => {//Per ogni nome all'interno dell'array di nomi
    sugg = `<li>${nome}</li>`
  });
  ris.innerHTML = `<ul>${sugg}</ul>`
});
