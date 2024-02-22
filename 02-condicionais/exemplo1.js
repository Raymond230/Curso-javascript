const temIngresso = true;
const censura = 16;
const idade = 15;
const acompanhadaDosPais = false;

{
  if (temIngresso === true) {
    if (idade >= censura || acompanhadaDosPais === true) {
      console.log("pode entrar");
    } else {
      console.log(
        "não pode entrar por que é menor de idade e não está acompanhado dos pais"
      );
    }
  } else {
    console.log("não pode entrar pq não tem ingresso");
  }
}
{

    if(idade > censura && temIngresso === true){
        console.log("pode entrar")
    }else {
        console.log("barrada")
    }

}

if(temIngresso === true){
    if(idade >= censura){
        console.log("pode entrar")
    }else{
       console.log("Menor de idade");
    }
}else{
    console.log("barrada sem ingresso")
}
