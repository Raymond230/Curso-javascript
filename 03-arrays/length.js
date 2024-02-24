{
const listaDeNome = ["igor", "juliana", "kaleo", "mamãe", "papai"];

let adicionar = listaDeNome.length

listaDeNome[adicionar] = "filho"

console.log(listaDeNome)
}

{
    const listaDeNome = ["igor", "juliana", "kaleo", "mamãe", "papai"];

    listaDeNome.push("filho")
    listaDeNome.push("filho2")
    listaDeNome.pop()
    listaDeNome.pop();


    console.log(listaDeNome)
}

{
     const listaDeNome = ["igor", "juliana", "kaleo", "mamãe", "papai"];

    //  listaDeNome.shift()
    //  listaDeNome.unshift("igor")
    let ultimoItem = listaDeNome.length -1
    console.log(ultimoItem)
}

