const stack = [];
let answer = "";

do {
  answer = prompt(
    "Cartas no baralho: " +
      stack.length +
      "\n1. Adicionar uma carta" +
      "\n2. Puxar uma carta" +
      "\n3. Sair"
  );

  switch (answer) {
    case "1":
      stack.push(prompt("Qual é a carta?"));
      break;
    case "2":
      if (stack.length > 0) {
        alert("Você puxou um(a) " + stack.pop());
      } else {
        alert("Não há nenhuma carta no baralho");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (answer !== "3");
