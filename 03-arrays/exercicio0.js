const paises = ['africa', 'brasil','argentina','peru','chile']

paises.push('canada')
console.log(paises)
paises.pop()
console.log(paises)
paises.unshift("suecia")
console.log(paises)
paises.shift()
console.log(paises)

let ultimoPais = paises[paises.length -1]
console.log(ultimoPais)

let segundoPais = paises[1]
console.log(segundoPais)

let paisIndice2 = paises[2]
console.log(paisIndice2)