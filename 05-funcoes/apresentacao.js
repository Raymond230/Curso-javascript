let pessoa = {
    nome: "Jose",
    idade: 29,
    profissao: "professor",
    altura: 1.73
}

if(pessoa.idade < 25){
    console.log(
      `Olá meu nome ${pessoa.nome},sou um jovem de tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`
    );
}else if (pessoa.idade < 60){
    console.log(
      `Olá meu nome ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`
    );
}else{
    `Olá meu nome ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`;
}

pessoa = {
  nome: "Joao",
  idade: 22,
  profissao: "militar",
  altura: 1.33,
};

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

pessoa = {
  nome: "Jota",
  idade: 21,
  profissao: "médico",
  altura: 1.99,
};

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

