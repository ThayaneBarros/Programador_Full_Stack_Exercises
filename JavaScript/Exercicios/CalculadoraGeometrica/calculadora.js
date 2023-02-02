function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triângulo:");
  const height = prompt("Informe a altura do triângulo:");
  return (base * height) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do retângulo:");
  const height = prompt("Informe a altura do retângulo:");
  return base * height;
}

function calcularAreaQuadrado() {
  const base = prompt("Informe o lado do quadrado:");
  return base * base;
}

function calcularAreaTrapezio() {
  const biggerBase = parseFloat(prompt("Informe a base maior do trapézio:"));
  const minorBase = parseFloat(prompt("Informe a base menor do trapézio:"));
  const height = prompt("Informe a altura do trapézio:");
  return ((biggerBase + minorBase) * height) / 2;
}

function calcularAreaCirculo() {
  const radius = prompt("Informe o raio do círculo:");
  return 3.14 * radius * radius;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n\n" +
      "1.Calcular área do triângulo\n" +
      "2.Calcular área do retângulo\n" +
      "3.Calcular área do quadrado\n" +
      "4.Calcular área do trapézio\n" +
      "5.Calcular área do círculo\n" +
      "6.Sair\n"
  );
}

function executar() {
  let answer = "";

  do {
    answer = exibirMenu();

    let resul;
    switch (answer) {
      case "1":
        resul = calcularAreaTriangulo();
        break;
      case "2":
        resul = calcularAreaRetangulo();
        break;
      case "3":
        resul = calcularAreaQuadrado();
        break;
      case "4":
        resul = calcularAreaTrapezio();
        break;
      case "5":
        resul = calcularAreaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida");
    }

    if (resul) {
      alert("Resultado: " + resul);
    }
  } while (answer !== "6");
}

executar();
