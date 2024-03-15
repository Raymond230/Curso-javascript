let numeroDesejado;
let itemDaLista = [];

while (numeroDesejado != 3) {
  numeroDesejado = parseFloat(
    prompt(`Olá usuário! Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)
  );

  if (numeroDesejado === 1) {
    let item = prompt("Digite o nome do item");

    itemDaLista.push(item)

  } else if (numeroDesejado === 2) {
    if (itemDaLista.length === 0) {
      alert("Não existe itens cadatrados");
    } else {
      alert(itemDaLista);
    }
    
  } else {
    alert("Good bye");
  }
}
