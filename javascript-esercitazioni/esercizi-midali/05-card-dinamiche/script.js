const products = [
  {
    titolo: "Sciarpa",
    desc: "Una sciarpa di cotone",
    url: "https://cdn0.iconfinder.com/data/icons/online-clothes-shopping-set/128/iStar_Design_Online_Shopping_LineIcons_Live-53-512.png",
  },
  {
    titolo: "Cappello",
    desc: "Un cappello di cotone",
    url: "https://icons.iconarchive.com/icons/iconsmind/outline/256/Hat-icon.png",
  },
  {
    titolo: "Guanti",
    desc: "Un paio di guanti",
    url: "https://static.thenounproject.com/png/2007758-200.png",
  },
];

const div = document.createElement("div");

function generateHTMLCards() {
  products.forEach((element) => {
    const divCard = document.createElement("div");
    const img = document.createElement("img");
    img.classList.add ('styleImage')
    const title = document.createElement("h2");
    const desc = document.createElement("p");
    img.src = element.url;
    title.textContent = element.titolo;
    desc.textContent = element.desc;
    document.body.appendChild(divCard);
    divCard.appendChild(img)
    divCard.appendChild(title)
    divCard.appendChild(desc)
  });
}

generateHTMLCards();
