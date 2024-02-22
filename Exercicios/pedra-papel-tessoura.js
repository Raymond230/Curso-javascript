const jogada1 = "tesoura"
const jogada2 = "papel"

if(jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra"){
    console.log("pedra ganhou!")
}else if(jogada1 === "pedra" && jogada2 === "papel" || jogada2 === "pedra" && jogada1 === "papel"){
    console.log("Papel ganhou")
}else if(jogada1 === "papel" && jogada2 === "tesoura" ||jogada2 === "papel" && jogada1 === "tesoura" ){
    console.log("tesoura ganhou")
}else{
    console.log("Empate")
}
console.log("fim de jogo")