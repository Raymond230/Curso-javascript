function apresentar(pessoa){
if (pessoa.idade < 25) {
  console.log(
    `Olá meu nome ${pessoa.nome},sou um jovem de tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`
  );
} else if (pessoa.idade < 60) {
  console.log(
    `Olá meu nome ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`
  );
} else {
  `Olá meu nome ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`;
}
}


let igor = {
  nome: "Jose",
  idade: 29,
  profissao: "professor",
  altura: 1.73,
};

apresentar(igor)

let pedro = {
  nome: "Joao",
  idade: 22,
  profissao: "militar",
  altura: 1.33,
};

apresentar(pedro)

let ray = {
  nome: "Jota",
  idade: 21,
  profissao: "médico",
  altura: 1.99,
};

apresentar(ray)
