const nameTourist = prompt("E ai, turista! Qual o seu nome?");
let isVisited = prompt("Você visitou alguma cidade?(Sim/Não)");

let qtdCityVisited = 0;
let cities = "";
while (isVisited === "Sim") {
  let city = prompt("Qual é o nome da cidade visitada?");

  cities += "\n-" + city;
  qtdCityVisited++;

  isVisited = prompt("Você visitou alguma outra cidade?(Sim/Não)");
}

const resul = `Turista: ${nameTourist}
Quantidade de cidades visitadas: ${qtdCityVisited}
Cidades Visitadas: ${cities}`;

alert(resul);
