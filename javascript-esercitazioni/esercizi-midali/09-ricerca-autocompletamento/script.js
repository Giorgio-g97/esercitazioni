const nomi = ["Giacomo", "Nunzio", "Giorgio", "Mario"];

const searchInput = document.querySelector(".inputSearch");

searchInput.addEventListener("onkeydown", () => {
  searchValue = searchInput.value;

  console.log(searchValue);
});
