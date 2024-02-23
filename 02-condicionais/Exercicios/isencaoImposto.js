let doencaG = false
let aposentados = true

let condicao = 28559.70
let meusRendimentos = 29000

if(meusRendimentos >= condicao){
    if(doencaG === true || aposentados === true){
        console.log("Isenta")
    }
}else if(meusRendimentos < condicao){
    console.log("Vaza leao")
}else{
    console.log("Pega leao");
}


