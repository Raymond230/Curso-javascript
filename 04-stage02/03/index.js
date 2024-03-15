let numberOne = parseFloat(prompt("digite o numero 1"));

let numberTwo = parseFloat(prompt("digite o numero 2"));

let soma = numberOne + numberTwo;
let subtracao = numberOne - numberTwo;
let multiplicacao = numberOne * numberTwo;
let divisao = numberOne / numberTwo;
let restoDaDivisao = numberOne % numberTwo;

alert(
  "Resultado soma: " +
    soma +
    "\n" +
    "Resultado subtração: " +
    subtracao +
    "\n"+
    "Resultado multiplicação: " +
    multiplicacao +
    "\n" +
    "Resultado divisão: " +
    divisao +
    "\n"+
    "Resultado resto da divisão: " +
    restoDaDivisao +
    "\n"
);
