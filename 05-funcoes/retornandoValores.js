function verificarMaioridade (nome, idade){
    if(idade >= 18){
        return true
    }else{
        return false
    }
}

let nome1 = "igor"
let idade1 = 19

let maiorDeIdade = verificarMaioridade(nome1,idade1)
console.log(maiorDeIdade)