const alturaJogador =205

if(alturaJogador < 180){
    console.log("Reprovado")
}else if (alturaJogador <= 185){
    console.log("Libero")
}else if(alturaJogador <= 195){
    console.log("Ponteiro")
}else if (alturaJogador <= 205){
    console.log("Oposto")
}else if (alturaJogador > 205){
    console.log("Central")
}