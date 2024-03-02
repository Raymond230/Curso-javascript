
let pessoa = {
  nome: "igor",
  idade: 66,
  profissao: "militar",
  altura: 1.73,
  apresentar: function () {
    const faixaEtaria = this.obterFaixaEtaria(this.idade);
    console.log(
      `meu nome ${this.nome}, sou um ${faixaEtaria} de ${this.idade}, tenho ${this.altura}m e minha profissão é ${this.profissao}`
    );
  },
  obterFaixaEtaria: function () {
    if (this.idade < 25) {
      return "Jovem";
    } else if (this.idade < 65) {
      return "Adulto";
    } else {
      return "idoso";
    }
  },
};

pessoa.apresentar()
console.log(pessoa.obterFaixaEtaria())


