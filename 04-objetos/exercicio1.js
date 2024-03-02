const pessoa = {
  nome: "igor",
  idade: 24,
  altura: 1.73,
  temCNH: true,
  apelido: ["iguinho", "ray"],
};

let textoCNH;

    if(pessoa.temCNH === true){
        textoCNH = "possui CNH"
}else{
    textoCNH = "Não possui CNH"
}


//jeito facil/errado
console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura},${textoCNH} e os seguintes apelidos: -${pessoa.apelido[0]}
-${pessoa.apelido[1]}`)

//melhorando o problema

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura},${textoCNH} e os seguintes apelidos:`)

for (let apelido of pessoa.apelido) {
  console.log(`--${apelido}`);
}

