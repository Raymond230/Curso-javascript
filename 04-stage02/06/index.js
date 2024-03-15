let valor = prompt("Entre 0 e 10, qual número eu estou pensando")

const numerosDoPrograma = Math.round(Math.random() * 10)

let tentativas = 0

while(Number(valor) != numerosDoPrograma){
    valor = prompt("Errou Tente Novamente")

    tentativas += 1
}

alert(`você acertou em ${tentativas}`)
