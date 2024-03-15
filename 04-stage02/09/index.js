let pacientes = [
  {
    nome: "igor",
    idade: 24,
    peso: 83,
    altura: 1.73,
  },
  {
    nome: "Juliana",
    idade: 24,
    peso: 73,
    altura: 1.63,
  },
  {
    nome: "kaleo",
    idade: 0.6,
    peso: 8.5,
    altura: 1.73,
  },
];

function printIMC(Paciente){
  alert(`Paciente ${pacientes.nome} possui o IMC de ${(pacientes.altura)/ ((pacientes.peso) ** 2).toFixed(2)}`)
}

for(let Paciente of pacientes){
  printIMC(Paciente)
}