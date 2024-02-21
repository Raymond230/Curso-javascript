//escopo é a região aonde um código é válido

{
    let idade = 29
    console.log(idade) // funciona por que está dentro do escopo
}

{
    let idade = 29
}
console.log(idade) // a variavel não existe fora do escopo

let nome = "igor"
{
    console.log(nome) // o que está fora existe dentro do escopo
}
