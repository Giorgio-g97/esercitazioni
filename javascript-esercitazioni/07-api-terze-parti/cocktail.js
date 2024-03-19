async function fetchCocktail() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );
  const data = await res.json();
  console.log(data);
  getAllCocktails(data);
}

function getAllCocktails(data) {
    const div = document.createElement('div')
    div.setAttribute('class', 'drink-card')
  data.drinks.forEach((drink) => {
    const img = document.createElement('img')
    img.src = drink.strDrinkThumb
    const h2 = document.createElement('h2')
    h2.textContent = drink.idDrink
    const p = document.createElement('p')
    p.textContent = drink.strInstructionsIT

    document.body.appendChild(div);
    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(p)
  });
}

fetchCocktail();
