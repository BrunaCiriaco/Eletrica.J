const listaProduto = {
  1: [
    {
      tipo: "Lustres",
      img: "../img/produtos/Rectangle31.png",
      nome: "Lustre suspenso rústico",
      desconto: "R$ 1.500,00",
      value: "R$ 1.000,00",
      parcela: "ou em 3x de R$ 333,33",
    },
  ],
  2: [
    {
      tipo: "Lâmpadas",
      img: "../img/produtos/lampada.png",
      nome: "Lâmpada",
      desconto: "R$ 60,00",
      value: "R$ 45,00",
      parcela: "ou em 2x de R$ 22,50",
    },
  ],
  3: [
    {
      tipo: "Acessórios",
      img: "../img/produtos/tomada.png",
      nome: "Lustre suspenso rústico",
      desconto: "R$ 25,00",
      value: "R$ 17,00",
      parcela: "",
    },
  ],
  4: [
    {
      tipo: "Ferramentas",
      img: "../img/produtos/ferramenta.png",
      nome: "Kit de ferramentas",
      desconto: "R$ 100,00",
      value: "R$ 80,00",
      parcela: "ou em 2x de R$ 40,00",
    },
  ],
  5: [
    {
      tipo: "Utensílios domésticos",
      img: "../img/produtos/utensilio.png",
      nome: "Garfos de mesa inox",
      desconto: "R$ 15,00",
      value: "R$ 8,00",
      parcela: "",
    },
  ],
  6: [
    {
      tipo: "Acessórios",
      img: "../img/produtos/acessorio.png",
      nome: "Lustre suspenso rústico",
      desconto: "R$ 120,00",
      value: "R$ 100,00",
      parcela: "ou em 4 x de R$ 25,00",
    },
  ],
  7: [
    {
      tipo: "Utensílios domésticos",
      img: "../img/produtos/ventilador.png",
      nome: "Ventilador 2 em 1, mesa e parede",
      desconto: "R$ 50,00",
      value: "R$ 30,00",
      parcela: "",
    },
  ],
  8: [
    {
      tipo: "Acessórios",
      img: "../img/produtos/espelhoTomada.png",
      nome: "Lustre suspenso rústico",
      desconto: "R$ 20,00",
      value: "R$ 10,00",
      parcela: "",
    },
  ],
};

const container = document.querySelector(".card-produto");

for (const produtoId in listaProduto) {
  const produto = listaProduto[produtoId][0];

  const cardProduto = document.createElement("div");
  cardProduto.classList.add("card-produto");

  cardProduto.innerHTML = `
        <p class="tipo-prduto">${produto.tipo}</p>
        <img class="img-produto" src="${produto.img}" alt="${produto.nome}">
        <p class="retangulo-produto"></p>
        <div class="info-produto">
          <h3 class="nome-produto">${produto.nome}</h3>
          <div class="valores">
            <p class="desconto-produto">${produto.desconto}</p>
            <p class="valor-produto">${produto.value}</p>
          </div>
          <p class="parcela-produto">${produto.parcela}</p>
        </div>
    `;

  container.appendChild(cardProduto);
}
