const userName = prompt("Qual o seu nome ?");
const lastName = prompt("Qual o seu sobrenome ?");
const fieldStudy = prompt("Qual o seu campo de estudo?");
const yearOfBirth = prompt("Qual o seu ano de nascimento ?");

const age = 2022 - parseFloat(yearOfBirth);
const result = `Nome: ${userName} ${lastName}
Campo de estudo: ${fieldStudy}
Idade: ${age}`;

alert("Recruta cadastrado com sucesso!\n\n" + result);
