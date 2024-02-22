let valorDoProduto = 1599
let totalDeDesconto = 0.1
let pagamentoAvista = false
let numeroDeParcelas = 6

if(pagamentoAvista === true){
    let desconto = valorDoProduto * totalDeDesconto;
    let valorFinal = valorDoProduto - desconto; 
    console.log(`O cliente GANHOU 10% DE DESCONTO o valor final é : R$ ${valorFinal} `)
}else if(pagamentoAvista === false && numeroDeParcelas <= 6){
    let parcelas = valorDoProduto / numeroDeParcelas;
    console.log(`O cliente escolheu parcelar até ${numeroDeParcelas}X, então não pagara juros valor das parcelas é R$ ${parcelas.toFixed(2)}`)
}else if (numeroDeParcelas > 6){
    console.log("O cliente escolheu pagar em mais Parcelas")
}

console.log("obrigado pelas compras!!")