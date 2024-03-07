function imprimirInverso (texto){
    const arrayTexto  = texto.split("")
    arrayTexto.reverse()
    console.log(arrayTexto)

    let resultadoFinal = ""

    for(let letra of arrayTexto){
        resultadoFinal += letra
    }
    console.log(resultadoFinal)
}

imprimirInverso("Cubos Academy")
