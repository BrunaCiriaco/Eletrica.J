const categorias = {
  1: [
    {
      tipo: "LÂMPADAS",
      img: "../img/categoria/lampada.png",
    },
  ],
  2: [
    {
      tipo: "LUSTRES",
      img: "../img/categoria/lustres.png",
    },
  ],
  3: [
    {
      tipo: "LUMINÁRIAS",
      img: "../img/categoria/luminaria.png",
    },
  ],
  4: [
    {
      tipo: "DECORAÇÕES",
      img: "../img/categoria/decoracao.png",
    },
  ],
  5: [
    {
      tipo: "ACESSÓRIOS",
      img: "../img/categoria/acessorios.png",
    },
  ],
  6: [
    {
      tipo: "FERRAMENTAS",
      img: "../img/categoria/ferramentas.png",
    },
  ],
  7: [
    {
      tipo: "UTENSÍLIOS DOMÉSTICOS",
      img: "../img/categoria/utensilios.png",
    },
  ],
  8: [
    {
      tipo: "CABOS",
      img: "../img/categoria/cabos.png",
    },
  ],
};

const tipoProdutos = document.querySelector(".card-categoria");

for (const produtoId in categorias) {
  const categoria = categorias[produtoId][0];

  const cardCategoria = document.createElement("div");
  cardCategoria.classList.add("card-categoria");

  cardCategoria.innerHTML = `
  <div class="card">
        <p class="tipo-categoria">${categoria.tipo}</p>
        <div class="img-categoria">
         <img class="altera-tamanho" src="${categoria.img}" alt="${categoria.tipo}">
        </div>
       
        </div>
    `;

  tipoProdutos.appendChild(cardCategoria);
}
