let answer = "";

const arrPatient = [];
do {
  let namesPatients = "";
  for (let i = 0; i < arrPatient.length; i++) {
    namesPatients += i + 1 + "º - " + arrPatient[i] + "\n";
  }

  answer = prompt(
    "Pacientes:\n" +
      namesPatients +
      "\nEscolha uma ação:" +
      "\n1.Novo paciente" +
      "\n2.Consultar paciente" +
      "\n3.Sair"
  );

  switch (answer) {
    case "1":
      arrPatient.push(prompt("Qual é o nome do paciente?"));
      break;

    case "2":
      if (arrPatient.length === 0) {
        alert("Não há pacientes na fila");
      } else {
        alert(arrPatient.shift() + " foi removido da fila");
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida");
  }
} while (answer !== "3");
