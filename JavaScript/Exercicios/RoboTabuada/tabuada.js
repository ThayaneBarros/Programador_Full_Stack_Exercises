const number = parseFloat(
  prompt(
    "Olá, eu sou o Robô da Tabuada!" +
      "\nInforme o número que você deseja calcular a tabuada:"
  )
);

let result = "Resultado da tabuada de 7:\n";
for (let i = 1; i <= 20; i++) {
  result += "\n->" + number + "*" + i + "=" + number * i;
}

alert(result);
