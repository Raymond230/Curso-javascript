const nomeCompleto = "Raimundo igor oliveira de araujo"

const array = nomeCompleto.split(" ")

let novoArray = []

for(let nomeSemEspaco of array){
    novoArray.push(nomeSemEspaco.trim())
}

console.log(novoArray)
