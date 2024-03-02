const cartaoDeConsumo = {
  nome: "Igor",
  idade: 24,
  produtos: [
    {
      nomeDoProduto: "Lasanha",
      preco: 10000,
      quantidade: 1,
    },
    {
      nomeDoProduto: "agua",
      preco: 10000,
      quantidade: 2,
    },
    {
      nomeDoProduto: "picanha",
      preco: 10000,
      quantidade: 4,
    },
  ],
};
let soma = 0

for(let item of cartaoDeConsumo.produtos){
   let valor = item.preco * item.quantidade
   soma += valor
   
}
console.log(soma)