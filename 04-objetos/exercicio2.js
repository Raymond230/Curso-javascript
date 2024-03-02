
const cartaoDeConsumo = {
  nome: "Igor",
  idade: 24,
  produtos: [
    {
      nomeDoProduto: "Lasanha",
      preco: 10000,
      quantidade: 2,
    },
    {
      nomeDoProduto: "agua",
      preco: 10000,
      quantidade: 2,
    },
    {
      nomeDoProduto: "picanha",
      preco: 10000,
      quantidade: 2,
    },
  ],
};

console.log(`${cartaoDeConsumo.nome} sua idade é ${cartaoDeConsumo.idade}`)

cartaoDeConsumo.idade = 26

console.log(
  `${cartaoDeConsumo.nome} sua idade é ${cartaoDeConsumo.idade}, ${cartaoDeConsumo.produtos[0].nomeDoProduto}`
);

console.log(cartaoDeConsumo.produtos[cartaoDeConsumo.produtos.length -1].preco)

