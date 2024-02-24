const palavra = 'Alemanha'
let encontrado = false

for(let letra of palavra){
    if(letra === "h" ){
        encontrado = true
        console.log(letra)
        break
    }
}  

if(!encontrado){
    console.log("Não tem H")
}