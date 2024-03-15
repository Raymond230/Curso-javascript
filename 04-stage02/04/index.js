let student = prompt("Qual o nome do(a) aluno(a)")
let n1 = parseFloat(prompt("Qual a Primeira Nota?"))
let n2 = parseFloat(prompt("Qual a Segunda Nota?"))
let n3 = parseFloat(prompt("Qual a Terceira Nota?"))

let average = ((n1 + n2 + n3) / 3)
average = average.toFixed(2)
if(average >= 6){
    alert("Parabéns vc fez sua obrigação" + average)
}else{
    alert("Estude mais" + average)
}