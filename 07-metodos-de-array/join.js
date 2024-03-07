function imprimirInverso(texto) {
  const arrayTexto = texto.split("");
  arrayTexto.reverse();
  console.log(arrayTexto.join(""));

}

imprimirInverso("Cubos Academy");
