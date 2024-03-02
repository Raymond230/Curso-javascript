const pessoa = {
     nome: "igor",
     idade: 24,
     altura:1.73,
     temCNH: true,
     apelido:["iguinho","ray"]
}

//usando ponto ('.')
console.log(`Bem-vindo, ${pessoa.nome} sua idade é ${pessoa.idade}`)

//usando colchetes ('[]')
const propriedade = "altura"
console.log(`Sua altura é ${pessoa[propriedade]} e seu apelido é ${pessoa['apelido']}`)