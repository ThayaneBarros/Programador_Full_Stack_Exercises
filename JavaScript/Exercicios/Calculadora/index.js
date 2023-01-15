const number1 = parseFloat(prompt("Insira o primeiro número"));
const number2 = parseFloat(prompt("Insira o segundo número"));

const sum = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;

const result = `
  soma: ${sum}
  subtração: ${subtraction}
  multiplicação: ${multiplication}
  divisão: ${division}`;

alert("Resultados:\n" + result);
