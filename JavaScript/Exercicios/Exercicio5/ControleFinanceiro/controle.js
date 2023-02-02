let cost = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));
let answer = "";

do {
  answer = prompt(
    "Saldo disponível: R$" +
      cost +
      "\n1.Adicionar dinheiro" +
      "\n2.Remover dinheiro" +
      "\n3.Sair"
  );

  switch (answer) {
    case "1":
      cost += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      cost -= parseFloat(prompt("Informe o valor a ser removido:"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida");
  }
} while (answer !== "3");
