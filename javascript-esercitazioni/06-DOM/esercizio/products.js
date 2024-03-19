const prodBtn = document.querySelector(".prodBtn");
prodBtn.addEventListener("click", () => {
  const obj = fetchProducts();
});

async function fetchProducts() {
  const res = await fetch("./prodotti.json");
  const obj = await res.json();
  genProdHTML(obj);
}

function genProdHTML(obj) {
  obj.forEach((element) => {
    const div = document.createElement("div");
    div.setAttribute('class', 'prodDiv')
    const image = document.createElement("img");
    image.setAttribute("class", "prodImg");
    image.src = element.immagine;
    const h2 = document.createElement("h2");
    h2.textContent = element.nome;
    const par2 = document.createElement("p");
    par2.textContent = element.desc;
    document.body.appendChild(div);
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(par2);
  });
}

fetchProducts();